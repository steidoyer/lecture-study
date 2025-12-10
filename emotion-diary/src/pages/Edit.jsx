import { useParams } from "react-router-dom";
import Editor from "../components/Editor";

const Edit = () => {
  const { id } = useParams();
  return (
    <>
      Edit {id}번
      <Editor />
    </>
  );
};

export default Edit;
