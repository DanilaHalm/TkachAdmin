import CommonButton from "./commonButton";

const EditButton = ({ onClick }) => {
  return <CommonButton className="bg-emerald-700" content={"Edit"} onClick={onClick} />;
};

export default EditButton;
