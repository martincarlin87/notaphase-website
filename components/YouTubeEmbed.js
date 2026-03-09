import { useEffect, useRef, useState } from 'react';

export default function YouTubeEmbed({ videoId, title, thumbnail }) {
  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const createPlayer = () => {
      if (!isMounted || !window.YT || !window.YT.Player || !playerContainerRef.current || playerRef.current) {
        return;
      }

      playerRef.current = new window.YT.Player(playerContainerRef.current, {
        width: '100%',
        height: '400',
        videoId,
        playerVars: {
          rel: 0,
          enablejsapi: 1,
          playsinline: 1,
        },
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setEnded(true);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );

      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);
      }

      const previousHandler = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        if (typeof previousHandler === 'function') {
          previousHandler();
        }
        createPlayer();
      };
    }

    return () => {
      isMounted = false;
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId]);

  const replayVideo = () => {
    setEnded(false);
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      playerRef.current.playVideo();
    }
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-md">
      <div
        ref={playerContainerRef}
        className="w-full h-full"
        style={{ visibility: ended ? 'hidden' : 'visible' }}
      />

      {ended && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center">
            <p className="mb-4 text-lg text-white">{title}</p>
            <button
              onClick={replayVideo}
              className="rounded-md bg-white px-4 py-2 font-medium text-black"
            >
              Replay video
            </button>
          </div>
        </div>
      )}
    </div>
  );
}