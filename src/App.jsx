import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Wave from "./components/Wave";
import { useFile } from "./FileContext";

const App = () => {
  const { file } = useFile();
  return (
    <>
      <Navbar />
      <div className="hero bg-base-100 min-h-screen">
        {file ? <Wave /> : <Upload />}
      </div>
    </>
  );
};

export default App;
