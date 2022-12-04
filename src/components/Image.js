const Image = ({ src }) => {
  return (
    <div className="container">
      <img src={src} alt={src} />
    </div>
  );
};
export default Image;
