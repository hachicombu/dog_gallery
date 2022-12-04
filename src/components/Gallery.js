import Image from "./Image";

const Gallery = ({ imagesList }) => {
  return (
    <section>
      {imagesList.map((src) => {
        return <Image src={src} key={src} />;
      })}
    </section>
  );
};
export default Gallery;
