import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = ({ createdDate, emotionId, content }) => {
    onCreate({
      createdDate: createdDate,
      emotionId: emotionId,
      content: content,
    });
  };

  return (
    <>
      <Header
        title={"새 일기쓰기"}
        leftChild={
          <Button
            text={"뒤로 가기"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </>
  );
};

export default New;
