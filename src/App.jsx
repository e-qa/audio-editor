import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Wave from "./components/Wave";
import { useAudio } from "./FileContext";

const App = () => {
  const { audio } = useAudio();
  return (
    <>
      <Navbar />
      <div className="hero bg-base-100 min-h-screen">
        {audio ? <Wave /> : <Upload />}
      </div>
    </>
  );
};

export default App;
