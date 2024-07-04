import { useAudio } from "../FileContext";

const Upload = () => {
  const { setAudio } = useAudio();

  const handleChanges = (e) => {
    const audioURL = URL.createObjectURL(e.target.files[0]);
    setAudio(audioURL);
  };

  return (
    <div>
      <input
        type="file"
        className="file-input  file-input-success file-input-bordered"
        onChange={(e) => handleChanges(e)}
      />
    </div>
  );
};

export default Upload;
