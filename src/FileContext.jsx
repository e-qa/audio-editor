import { createContext, useContext, useState } from "react";

const FileContext = createContext();

// eslint-disable-next-line react/prop-types
export const FileProvider = ({ children }) => {
  const [file, setFile] = useState(null);

  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFile = () => {
  return useContext(FileContext);
};
