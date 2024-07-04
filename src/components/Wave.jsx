import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

import Hover from "wavesurfer.js/plugins/hover";
import ControlPanel from "./ControlPanel";
import { useAudio } from "../FileContext";

const Wave = () => {
  const { audio, zoom } = useAudio();
  const [isLoad, setIsLoad] = useState(false);

  const waveContainer = useRef(null);
  const wavesurferRef = useRef(null);
  useEffect(() => {
    if (!wavesurferRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: waveContainer.current,
        waveColor: "#656666",
        progressColor: "#00a96e",
        width: "80vw",
        height: 100,
        url: audio,
        dragToSeek: true,
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
    wavesurferRef.current.on("ready", () => {
      setIsLoad(true);
    });
  }, [audio]);

  useEffect(() => {
    if (isLoad) {
      wavesurferRef.current.zoom(zoom);
    }
  }, [zoom, isLoad]);

  return (
    <div>
      <div ref={waveContainer} className="flex justify-center" />
      <ControlPanel wavesurferRef={wavesurferRef} />
    </div>
  );
};

export default Wave;
