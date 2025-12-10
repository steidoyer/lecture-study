import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  return <>Diary {id}번</>;
};

export default Diary;
