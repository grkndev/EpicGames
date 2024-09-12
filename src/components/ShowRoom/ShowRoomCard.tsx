"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

export default function ShowRoomCard() {
  const [isClient, setIsClient] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!isVideoFinished) {
        if (window.scrollY <= 10) {
          setIsVideoReady(true);
          setIsVideoEnded(false);
        }
        if (window.scrollY >= 200) {
          setIsVideoReady(false);
          setIsVideoEnded(true);
          setIsMuted(true);
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    setIsVideoFinished(true);
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

  if (!isClient) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <div
      className="w-2/3 h-[720px] rounded-3xl bg-black overflow-hidden relative cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isVideoReady && !isVideoEnded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg')`,
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
          url="https://youtu.be/QdBZY2fkU-0"
          playing={isVideoReady && !isVideoEnded}
          loop={false}
          muted={isMuted}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0, zoom: 125 }}
          onReady={handleVideoReady}
          onEnded={handleVideoEnd}
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
              src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d358ca0f4ef1b724361c30dd82547992.png"
              alt=""
              className="w-48 h-48 object-contain"
            />
            <h1 className="text-5xl font-bold">Grand Theft Auto VI</h1>
            <p className="text-sm text-white/60 max-w-2xl">
              The Grand Theft Auto V: Premium Edition includes the complete GTAV
              story, Grand Theft Auto Online and all existing gameplay upgrades
              and content. You'll also get the Criminal Enterprise Starter Pack,
              the fastest way to jumpstart your criminal empire in GTA Online.
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
              <img
                src="https://media.gq-magazine.co.uk/photos/656f2242aa1cf05b32d6bbbb/16:9/w_2560%2Cc_limit/GFA_01.png"
                alt=""
                className="h-16 aspect-video object-cover border-2 border-woodsmoke-500 rounded-xl shadow-2xl shadow-woodsmoke-700 hover:scale-125 transition-all duration-300"
              />
              <img
                src="https://media.gq-magazine.co.uk/photos/656f2242aa1cf05b32d6bbbb/16:9/w_2560%2Cc_limit/GFA_01.png"
                alt=""
                className="h-14 aspect-video object-cover border-2 border-white/20 rounded-xl hover:scale-125 transition-all duration-300"
              />
              <img
                src="https://media.gq-magazine.co.uk/photos/656f2242aa1cf05b32d6bbbb/16:9/w_2560%2Cc_limit/GFA_01.png"
                alt=""
                className="h-14 aspect-video object-cover border-2 border-white/20 rounded-xl hover:scale-125 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
