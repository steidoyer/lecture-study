import getEmotionImgById from "../utils/getEmotionImgById";

const EmotionItem = ({ emotionId, emotionName, onClick }) => {
  const handleClick = () => {
    onClick(emotionId);
  };
  return (
    <div onClick={handleClick}>
      <img src={getEmotionImgById(emotionId)} />
      {emotionName}
    </div>
  );
};

export default EmotionItem;
