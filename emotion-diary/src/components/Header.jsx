const Header = ({ title, leftChild, rightChild }) => {
  return (
    <>
      <div className="header">
        <div>{leftChild}</div>
        {title}
        <div>{rightChild}</div>
      </div>
    </>
  );
};

export default Header;
