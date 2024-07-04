import { useState } from "react";
import { useAudio } from "../FileContext";

/* eslint-disable react/prop-types */
const ControlPanel = ({ wavesurferRef }) => {
  const { zoom, setZoom } = useAudio();
  const [value, setValue] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mt-10 flex items-center justify-around">
      <button
        onClick={() => {
          wavesurferRef.current.playPause();
          setIsPlaying(!isPlaying);
        }}
        className="btn btn-success"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      <div className="flex items-center gap-5">
        <label htmlFor="volume">Volume</label>
        <input
          type="range"
          id="volume"
          min={0}
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="range range-xs"
        />
      </div>
      <div className="flex items-center gap-5">
        <label htmlFor="zoom">Zoom</label>
        <input
          type="range"
          id="zoom"
          min={0}
          max={300}
          value={zoom}
          onChange={(e) => setZoom(e.target.valueAsNumber)}
          className="range range-xs"
        />
      </div>
    </div>
  );
};

export default ControlPanel;
