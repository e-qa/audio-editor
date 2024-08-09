import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.js";
import ControlPanel from "./ControlPanel";

import { useAudio } from "../FileContext";
import { createAudioElement } from "../lib/createAudioElement";

const Wave = () => {
  const { audio, zoom, speed } = useAudio();

  const [isLoad, setIsLoad] = useState(false);
  const waveContainer = useRef(null);
  const wavesurferRef = useRef(null);
  const wsRegions = useRef(null);
  const audioSrc = createAudioElement(audio);
  const audioElement = useRef(audioSrc);

  useEffect(() => {
    if (!wavesurferRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: waveContainer.current,
        waveColor: "#656666",
        progressColor: "#00a96e",
        width: "80vw",
        height: 100,
        media: audioElement.current,
        dragToSeek: true,
        audioRate: 1,
      });
    }

    wavesurferRef.current.on("ready", () => {
      setIsLoad(true);
      wsRegions.current = wavesurferRef.current.registerPlugin(
        RegionsPlugin.create()
      );
    });
  }, [audioElement]);

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
      <button onClick={() => audioElement.current.play()}>play</button>
    </div>
  );
};

export default Wave;
