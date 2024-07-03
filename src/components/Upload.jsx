import { useFile } from "../FileContext";

const Upload = () => {
  const { setFile } = useFile();

  const handleChanges = (e) => {
    const audioURL = URL.createObjectURL(e.target.files[0]);
    setFile(audioURL);
  };

  return (
    <div>
      <input
        type="file"
        className="file-input file-input-ghost file-input-bordered"
        onChange={(e) => handleChanges(e)}
      />
    </div>
  );
};

export default Upload;
