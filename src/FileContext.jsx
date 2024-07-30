import { createContext, useContext, useState } from "react";

const FileContext = createContext();

// eslint-disable-next-line react/prop-types
export const FileProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);
  const [zoom, setZoom] = useState(0);
  const [speed, setSpeed] = useState(1);

  return (
    <FileContext.Provider
      value={{ audio, setAudio, zoom, setZoom, speed, setSpeed }}
    >
      {children}
    </FileContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAudio = () => {
  return useContext(FileContext);
};
