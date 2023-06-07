import { useCallback, useRef, useState } from 'react';
import { Refs } from './Refs';

export const RefsSample = () => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Listen for playing-change events
  const onPlayingChange = useCallback(() => {
    // @ts-ignore
    setIsPlaying(ref.current?.isPlaying);
  }, []);

  // UI callbacks
  // @ts-ignore
  const onPlay = useCallback(() => ref.current?.play(), []);
  // @ts-ignore
  const onPause = useCallback(() => ref.current?.pause(), []);

  return (
    <>
      <Refs
        ref={ref}
        onPlayingChange={onPlayingChange}>
      </Refs>
      <button disabled={isPlaying} onClick={onPlay}>
        play
      </button>
      <button disabled={!isPlaying} onClick={onPause}>
        pause
      </button>
    </>
  );
}
