import { useParams } from "react-router-dom";

const Diary = ({ emotionId, createdDate, content }) => {
  <div>
    {emotionId}
    <div>
      <div>{createdDate}</div>
      {content}
    </div>
  </div>;
  const { id } = useParams();
  return <>Diary {id}번</>;
};

export default Diary;
