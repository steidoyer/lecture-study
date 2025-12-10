import Button from "../components/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header
        title={"Home"}
        leftChild={<Button text={"뒤로"} />}
        rightChild={<Button text={"앞으로"} />}
      />
    </>
  );
};

export default Home;
