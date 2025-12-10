import { useState } from "react";
import Button from "./Button";
import { getFormattedDate } from "../util/util";

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeDate = (e) => {
    setInput({
      ...input,
      createdDate: new Date(e.target.value),
    });
  };

  return (
    <>
      <div>
        <h2>오늘의 날짜</h2>
        <input
          type="date"
          name="createdDate"
          value={getFormattedDate(input.createdDate)}
          onChange={onChangeDate}
        ></input>
      </div>
      <div>
        <h2>오늘의 감정</h2>
      </div>
      <div>
        <h2>오늘의 일기</h2>
        <textarea></textarea>
      </div>
      <div>
        <Button text={"취소하기"} />
        <Button text={"작성 완료"} />
      </div>
    </>
  );
};

export default Editor;
