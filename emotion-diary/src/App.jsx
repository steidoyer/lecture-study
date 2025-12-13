import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { createContext, useReducer, useRef } from "react";
import { reducer } from "./utils/reducer";

export const mockData = [
  {
    id: 1,
    createdDate: new Date(),
    emotionId: 3,
    content: "테스트1",
  },
  {
    id: 2,
    createdDate: new Date(),
    emotionId: 2,
    content: "테스트2",
  },
  {
    id: 3,
    createdDate: new Date(),
    emotionId: 3,
    content: "테스트3",
  },
];

// 예제에서는 여기 reducer 있던 자리였는데 다른 파일로 분리함
// import로 불러옴 (import reducer ...)
// => 컴포넌트와 상태관리 코드 분리

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const id = useRef(3);
  const [data, dispatch] = useReducer(reducer, mockData);

  const onCreate = ({ createdDate, emotionId, content }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: ++id.current,
        createdDate: new Date(createdDate),
        emotionId: emotionId,
        content: content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id: id,
      },
    });
  };

  const onUpdate = ({ id, createdDate, emotionId, content }) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: id,
        createdDate: new Date(createdDate),
        emotionId: emotionId,
        content: content,
      },
    });
  };

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "skyblue",
          color: "blue",
          fontWeight: "bold",
          padding: "20px",
          margin: "10px",
          textAlign: "center",
        }}
      >
        결국 모든 건 다 App 컴포넌트 안에서 바뀌는거고 라우터 부분이 전부 다
        바뀜
      </div>
      <DiaryStateContext.Provider value={mockData}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
      {/* 다른 페이지 연결 링크 */}
      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div> */}
    </div>
  );
}

export default App;
