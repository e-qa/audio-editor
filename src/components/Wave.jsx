import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Hover from "wavesurfer.js/plugins/hover";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.js";

import ControlPanel from "./ControlPanel";
import { useAudio } from "../FileContext";

const Wave = () => {
  const { audio, zoom, speed } = useAudio();

  const [isLoad, setIsLoad] = useState(false);
  const waveContainer = useRef(null);
  const wavesurferRef = useRef(null);
  const wsRegions = useRef(null);

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
        audioRate: 1,
        plugins: [
          Hover.create({
            lineColor: "#00ad6a",
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
      wsRegions.current = wavesurferRef.current.registerPlugin(
        RegionsPlugin.create()
      );
    });
  }, [audio]);

  useEffect(() => {
    if (isLoad) {
      wavesurferRef.current.zoom(zoom);
    }
  }, [zoom, isLoad]);

  useEffect(() => {
    if (isLoad) {
      let preservePitch = true;
      wavesurferRef.current.setPlaybackRate(speed, preservePitch);
    }
  }, [speed, isLoad]);

  return (
    <div>
      <div ref={waveContainer} className="flex justify-center" />

      <ControlPanel wavesurferRef={wavesurferRef} />
    </div>
  );
};

export default Wave;
