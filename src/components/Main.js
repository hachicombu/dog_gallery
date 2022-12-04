import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Gallery from "./Gallery";

const Main = () => {
  const [selected, setSelected] = useState("beagle");
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    // getApi
    const getImages = () => {
      console.log("get api start");
      const url = `https://dog.ceo/api/breed/${selected}/images/random/4`;
      axios
        .get(url)
        .then((res) => {
          setImagesList(res.data.message);
        })
        .catch((error) => {
          console.error("画像取得に失敗しました", error);
        });
    };
    getImages();
  }, [selected]);

  return (
    <>
      <main>
        <Form selected={selected} setSelected={setSelected} />
        <Gallery imagesList={imagesList} />
      </main>
    </>
  );
};

export default Main;
