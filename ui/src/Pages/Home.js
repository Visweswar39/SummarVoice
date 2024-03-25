import React from "react";
// spam -> red, not-spam -> lightish green

function Home() {
  const summary = 'The Product Card component is an easy way to display content like product descriptions. This Product card component will display featured image, product name, price, quantity, add to cart and Add to Cart button.';
  return (
    <div className="flex flex-col justify-center items-center gap-10 m-10">
      <h1 className="font-bold text-3xl">SummarVoice</h1>
      <textarea cols={100} className="border-black border-2" />
      <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Generate summary
      </button>
      <div className="bg-green-200">{summary}</div>
      <div className="flex flex-row gap-7">
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Male voice
        </button>
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          female voice
        </button>
      </div>
    </div>
  );
}

export default Home;
