// Fetch an image from the API and display it

// eslint-disable-next-line no-unused-vars
const fetchImage = async () => {
  const res = await fetch("https://nekos.best/api/v2/happy");
  const data = await res.json();
  return data.results[0].url;
};

export const Fetch = () => {
  const imageUrl = "https://nekos.best/api/v2/happy/19c3f2e8-2aec-4358-8e96-87692d9aa2bd.gif";

  return (
    <>
      <img src={imageUrl} alt="Happy anime character" />
    </>
  );
};
