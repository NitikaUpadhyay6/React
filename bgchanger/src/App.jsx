import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white rounded-3xl p-2">
            <button
              onClick={() => setColor("black")}
              className="text-white p-1 rounded-full px-4 shadow-lg outline-none"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("red")}
              className="text-white p-1 rounded-full px-4 shadow-lg outline-none"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="text-white p-1 rounded-full px-4 shadow-lg outline-none"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("orange")}
              className="text-white p-1 rounded-full px-4 shadow-lg outline-none"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("limegreen")}
              className="text-white p-1 rounded-full px-4 shadow-lg outline-none"
              style={{ backgroundColor: "limegreen" }}
            >
              Limegreen
            </button>
            <button
              onClick={() => setColor("green")}
              className="text-white p-1 rounded-full px-4 shadow-lg outline-none"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("olive")}
              className="text-white p-1 rounded-full px-4 shadow-lg outline-none"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("violet")}
              className="text-white p-1 rounded-full px-4 shadow-lg outline-none"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={() => setColor("turquoise")}
              className="text-white p-1 rounded-full px-4 shadow-lg outline-none"
              style={{ backgroundColor: "turquoise" }}
            >
              Turquoise
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
