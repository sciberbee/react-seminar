// Play and pause a video

export const Video = () => {
  const isPlaying = false;

  return (
    <>
      <button>{isPlaying ? "Pause" : "Play"}</button>
      <video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        loop
        playsInline
      />
    </>
  );
};
