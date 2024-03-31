// Fetch an image from the API and display it
import { useEffect } from "react";
import { useState } from "react";

const fetchImage = async () => {
  const res = await fetch("https://nekos.best/api/v2/happy");
  const data = await res.json();
  return data.results[0].url;
};

export const Fetch = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    //fetchImage().then((url) => setImageUrl(url));
    const apiCall = async () => {
      //async 함수는 항상 promise를 반환
      const url = await fetchImage();
      setImageUrl(url);
    };
    apiCall();
  }, []); //아무것도 안 넣으면 제일 처음 렌더링 될 때( = 새로고침)만 실행

  return (
    <>
      <img src={imageUrl} alt="Happy anime character" />
    </>
  );
};
