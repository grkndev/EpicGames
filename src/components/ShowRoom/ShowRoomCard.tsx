"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { Progress } from "../ui/progress";
import games from "./showroomgames";

export default function ShowRoomCard() {
  const [isClient, setIsClient] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [gameIndex, setGameIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 10) {
        setIsVideoReady(true);
        setIsVideoEnded(false);
      }
      if (window.scrollY >= 200) {
        setIsVideoReady(false);
        setIsVideoEnded(true);
        setIsMuted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVideoFinished]);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    setIsVideoFinished(true);

    setTimeout(() => {
      if (gameIndex < games.length - 1) {
        setGameIndex(gameIndex + 1);
      } else {
        setGameIndex(0);
      }
      setIsVideoFinished(false);

      setIsVideoEnded(false);
    }, 3 * 1000);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleCardClick = () => {
    if (isVideoReady && !isVideoEnded) {
      setIsVideoEnded(true);
    } else {
      setIsVideoEnded(false);
    }
  };

  const handleProgress = (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => {
    setProgress(state.played * 100);
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="w-4/5 h-[720px] rounded-3xl   bg-black overflow-hidden relative cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Background image */}
      <div
        className={`absolute w-full inset-0 transition-opacity duration-1000 ${
          isVideoReady && !isVideoEnded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url('${games[gameIndex].thumbnail}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          boxShadow: "0 0 150px 1px rgba(54, 55, 68, 0.25)",
        }}
      ></div>

      {/* Video player */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isVideoReady && !isVideoEnded ? "opacity-100" : "opacity-0"
        }`}
      >
        
        <ReactPlayer
          url={games[gameIndex].video}
          playing={isVideoReady && !isVideoEnded}
          loop={false}
          muted={isMuted}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0, zoom: 155 }}
          onReady={handleVideoReady}
          onEnded={handleVideoEnd}
          onProgress={handleProgress}
          config={{
            youtube: {
              playerVars: {
                controls: 0,
                modestbranding: 1,
                autoplay: 1,
                showinfo: 0,
                rel: 0,
              },
            },
          }}
        />
      </div>

      {/* Overlay for content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
        {/* Mute/Unmute button */}
        {isVideoReady && !isVideoEnded && (
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        )}

        {/* Content */}
        <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-8">
          <div className="space-y-4">
            <img
              src={games[gameIndex].logo}
              alt=""
              className="w-48 h-48 object-contain"
            />
            <h1 className="text-5xl font-bold">{games[gameIndex].title}</h1>
            <p className="text-sm text-white/60 max-w-2xl">
              {games[gameIndex].description}
            </p>
          </div>

          {/* Buttons and thumbnails */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 w-2/3">
              <Button
                className="w-1/4"
                variant={"secondary"}
                onClick={(e) => e.stopPropagation()}
              >
                <span>Pre-order</span>
              </Button>
              <Button
                className="bg-woodsmoke-900 hover:bg-woodsmoke-950"
                variant={"default"}
                onClick={(e) => e.stopPropagation()}
              >
                <span>Add to Wishlist</span>
              </Button>
            </div>

            <div className="flex space-x-4 w-1/3 items-center">
              {games[gameIndex].images.map((image, index) => (
                <img
                key={index}
                  src={image}
                  alt=""
                  className="h-16 aspect-video object-cover border-2 border-woodsmoke-500 rounded-xl shadow-2xl shadow-woodsmoke-700 hover:scale-125 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      {isVideoReady && !isVideoEnded && (
        <div className="absolute bottom-0 left-0 w-full h-1  overflow-hidden rounded-b-3xl">
          <Progress
            value={progress}
            className="h-1 rounded-b-3xl bg-transparent fill-white"
          />
        </div>
      )}
    </div>
  );
}
