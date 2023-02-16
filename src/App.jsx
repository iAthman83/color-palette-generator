import { useState } from "react";
import ColorCard from "./components/ColorCard";
function App() {
  const [color, setColor] = useState([
    "#0000FF",
    "#0000FF",
    "#4f46e5",
    "#a21caf",
    "#0000FF",
  ]);
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto h-screen py-10  flex flex-col justify-center items-center space-y-10">
        <h1 className="font-semibold text-4xl">Color palette generator</h1>
        <div className="flex space-x-4 flex-wrap">
          <ColorCard color={color[0]} />
          <ColorCard color={color[1]} />
          <ColorCard color={color[2]} />
          <ColorCard color={color[3]} />
          <ColorCard color={color[4]} />
        </div>
        <button className="bg-violet-900 py-3 px-16 text-white rounded-lg outline-none focus:ring-1 shadow-lg transform active:scale-75 transition-transform">
          Generate palette
        </button>
        <p>Or just press the "Spacebar" to generate new palettes</p>
      </div>
    </div>
  );
}

export default App;
