"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getUi } from "@/lib/i18n";

function getYouTubeVideoId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: string | HTMLElement,
        opts: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: { onReady?: (event: { target: { setPlaybackRate: (r: number) => void } }) => void };
        }
      ) => unknown;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YouTubeEmbedProps {
  url: string;
  playbackRate?: number;
  className?: string;
  title?: string;
}

export default function YouTubeEmbed({ url, playbackRate = 1, className = "", title }: YouTubeEmbedProps) {
  const { locale } = useLocale();
  const t = getUi(locale);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<unknown>(null);

  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;

  const useHalfSpeed = playbackRate > 0 && playbackRate < 1;

  useEffect(() => {
    if (!useHalfSpeed || !containerRef.current) return;

    const initPlayer = () => {
      if (!window.YT || !containerRef.current) return;
      const wrapper = document.createElement("div");
      wrapper.id = `yt-player-${videoId}`;
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(wrapper);
      playerRef.current = new window.YT!.Player(wrapper.id, {
        videoId,
        playerVars: { autoplay: 0, rel: 0 },
        events: {
          onReady: (event: { target: { setPlaybackRate: (r: number) => void } }) => {
            event.target.setPlaybackRate(playbackRate);
          },
        },
      });
    };

    if (window.YT) {
      initPlayer();
      return;
    }

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
      window.onYouTubeIframeAPIReady = undefined;
    };

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const first = document.getElementsByTagName("script")[0];
    first?.parentNode?.insertBefore(tag, first);

    return () => {
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, [videoId, playbackRate, useHalfSpeed]);

  // Vitesse 0,5 : le player est créé par l'API YouTube pour pouvoir appliquer setPlaybackRate
  // [&>div] et [&_iframe] forcent le wrapper et l'iframe injectés par l'API à remplir le conteneur
  if (useHalfSpeed) {
    return (
      <div className={`overflow-hidden rounded-xl border border-border bg-background-card ${className}`}>
        <div
          className="relative aspect-video w-full overflow-hidden bg-black [&>div]:absolute [&>div]:inset-0 [&>div]:h-full [&>div]:w-full [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full"
          ref={containerRef}
        />
        <p className="px-3 py-1.5 text-center text-xs text-foreground-muted">
          {t.projectDetail.playbackRateDefault.replace("{rate}", String(playbackRate))}
        </p>
      </div>
    );
  }

  // Vitesse normale : iframe simple
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-background-card ${className}`}>
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
          title={title || "Vidéo de démonstration"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
