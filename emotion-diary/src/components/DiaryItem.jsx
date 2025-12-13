import { useContext } from "react";
import Button from "./Button";
import { DiaryDispatchContext } from "../App";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const { onDelete } = useContext(DiaryDispatchContext);
  const onDeleteBtn = () => {
    console.log(id);
    onDelete(id);
  };
  return (
    <div style={{ margin: "10px" }}>
      <div style={{ display: "flex" }}>
        <div>{emotionId}</div>
        <div>
          <br />
          {id}
          <div>{content}</div>
          <div>{createdDate}</div>
        </div>
      </div>
      <div>
        <Button text={"삭제하기"} onClick={onDeleteBtn} />
      </div>
    </div>
  );
};

export default DiaryItem;
