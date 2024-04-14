import FilesIcon from "../assets/files.svg";

const Files: React.FC<{
  setIsOverviewActive: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;
}> = ({ setIsOverviewActive }) => {
  return (
    <div className="files">
      <button
        onClick={() => setIsOverviewActive((prevState: boolean) => !prevState)}
      >
        <img src={FilesIcon} alt="Files" />
      </button>
    </div>
  );
};

export default Files;
