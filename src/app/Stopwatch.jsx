// Create a stopwatch using setInterval and clearInterval.
import { useRef, useState } from "react";

export const Stopwatch = () => {
  const ourInterval = useRef();

  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const seconds = currentTime && startTime ? (currentTime - startTime) / 1000 : 0;
  return (
    <>
      <span>{seconds.toFixed(2)} seconds</span>
      <div>
        <button
          onClick={() => {
            const now = Date.now();
            setStartTime(now);
            setCurrentTime(now);

            ourInterval.current = setInterval(() => {
              setCurrentTime(Date.now()); // 할 때마다 리렌더링
            }, 10);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            clearInterval(ourInterval.current);
          }}
        >
          Stop
        </button>
      </div>
    </>
  );
};
