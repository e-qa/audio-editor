import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import { useFile } from "../FileContext";
import Hover from "wavesurfer.js/plugins/hover";

const Wave = () => {
  const { file } = useFile();
  const waveContainer = useRef(null);
  const wavesurferRef = useRef(null);

  useEffect(() => {
    if (!wavesurferRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: waveContainer.current,
        waveColor: "#34374B",
        progressColor: "#00a96e",
        width: "80vw",
        height: 100,
        url: file,
        plugins: [
          Hover.create({
            lineColor: "#50ad39",
            lineWidth: 1,
            labelBackground: "#555",
            labelColor: "#fff",
            labelSize: "11px",
          }),
        ],
      });
    }
  }, [file]);

  return (
    <div>
      <div ref={waveContainer} />
      <button
        onClick={() => {
          wavesurferRef.current.playPause();
        }}
      >
        play
      </button>
    </div>
  );
};

export default Wave;
