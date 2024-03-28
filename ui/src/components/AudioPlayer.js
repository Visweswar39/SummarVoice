import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
const AudioPlayer = ({audioSrc}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  

  // Function to toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  

  // Function to play audio
  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  useEffect(() => {
    if (isPlaying) {
      playAudio();
    }
  }, [isPlaying]);

  return (
    <div>
      <button onClick={togglePlay}>
        <Icon name={isPlaying? 'ppause' : 'pplay'} />
      </button>
    </div>
  );
};

export default AudioPlayer;
