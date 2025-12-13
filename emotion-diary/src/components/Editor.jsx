import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import getFormattedDate from "../utils/getFormattedDate";
import emotionList from "../constants/emotionList";
import EmotionItem from "./EmotionItem";

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();

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

  const onChangeContent = (e) => {
    setInput({
      ...input,
      content: e.target.value,
    });
  };

  const onClickSubmitBtn = () => {
    onSubmit(input);
  };

  const onClickGoBack = () => {
    nav(-1);
  };

  const onClickEmotionItem = (emotionId) => {
    setInput({
      ...input,
      emotionId,
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
        <div style={{ display: "flex" }}>
          {emotionList.map((item) => {
            return (
              <EmotionItem
                key={item.emotionId}
                emotionId={item.emotionId}
                emotionName={item.emotionName}
                onClick={onClickEmotionItem}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h2>오늘의 일기</h2>
        <textarea
          placeholder="오늘의 일기"
          value={input.content}
          onChange={onChangeContent}
        ></textarea>
      </div>
      <div>
        <Button text={"취소하기"} onClick={onClickGoBack} />
        <Button text={"작성 완료"} onClick={onClickSubmitBtn} />
      </div>
    </>
  );
};

export default Editor;
