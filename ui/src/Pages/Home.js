import React, { useEffect, useState } from "react";
import { Icon } from "../components/Icon";
import AudioPlayer from "../components/AudioPlayer";
import { SummaryCard } from "../components/SummaryCard";
// spam -> red, not-spam -> lightish green

// Asynchronous function to get summary
async function getSummary(data, setSummary) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/luisotorres/bart-finetuned-samsum",
    {
      headers: {
        Authorization: process.env.REACT_APP_HUGGING_FACE_AUTH,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  console.log(result[0]?.summary_text);
  setSummary(result[0]?.summary_text);
  return result;
}

function Home() {
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [generateAudio, setGenereateAudio] = useState(false);
  const [audioSrc, setAudioSrc] = useState("");
  const [messageType, setMessageType] = useState("");

  console.log(process.env)
  // useEffect to call spam api
  useEffect(() => {
    if (summary !== "") fetchMessageType(summary);
  }, [summary]);

  // Function to fetch audio from API
  const fetchMessageType = async (summary) => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/is_spam`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ summary: summary }),
        }
      );
      const data = await response.json();
      if (data?.message === '0') {
        setMessageType("spam");
      } else {
        setMessageType("notSpam");
      }
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  // Function to fetch audio from API
  const fetchAudio = async (body, voice) => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/tts`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ body: body, option: voice }),
        }
      );
      const data = await response.blob();
      setAudioSrc(URL.createObjectURL(data));
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  console.log("render");

  return (
    <div className="flex flex-col justify-center items-center gap-10 m-10">
      <h1 className="font-bold text-3xl">SummarVoice</h1>
      <textarea
        cols={100}
        className="border-black border-2"
        value={email}
        onChange={(text) => setEmail(text.target.value)}
      />

      <button
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          getSummary(email, setSummary);
        }}
      >
        Generate summary
      </button>
      <div>
        {summary === "" && messageType==="" ? (
          <SummaryCard summary={"Enter your mail up above !!"} />
        ) : (
          <SummaryCard summary={summary} messageType={messageType} />
        )}
      </div>
      <div className="flex flex-row gap-7">
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setGenereateAudio(true);
            fetchAudio(summary, "male");
          }}
        >
          Male voice
        </button>
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setGenereateAudio(true);
            fetchAudio(summary, "female");
          }}
        >
          female voice
        </button>
      </div>
      {generateAudio && audioSrc !== "" ? (
        <AudioPlayer audioSrc={audioSrc} setAudioSrc={setAudioSrc} />
      ) : null}
    </div>
  );
}

export default Home;
