import Button from "../components/Button";
import Header from "../components/Header";
import DiaryItem from "../components/DiaryItem";
import getFormattedDate from "../utils/getFormattedDate";
import { useNavigate } from "react-router-dom";
import { mockData } from "../App";
const Home = () => {
  const nav = useNavigate();

  return (
    <>
      <Header
        title={"Home"}
        leftChild={<Button text={"뒤로"} />}
        rightChild={<Button text={"앞으로"} />}
      />
      <div>
        <Button
          text={"새 일기 쓰기"}
          onClick={() => {
            nav("/new");
          }}
        />
      </div>
      {mockData.map((item) => {
        return (
          <DiaryItem
            key={item.id}
            id={item.id}
            emotionId={item.emotionId}
            createdDate={getFormattedDate(item.createdDate)} // Date 객체는 string으로 바꿔서 넣기
            content={item.content}
          />
        );
      })}
    </>
  );
};

export default Home;
