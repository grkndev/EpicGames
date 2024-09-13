import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
const DiscoverNewGames = () => {
  const games = [
    {
      name: "Grand Theft Auto V",
      description: "Open world action-adventure game",
      price: "$29.99",
    },
    {
      name: "Red Dead Redemption 2",
      description: "Western-themed action-adventure game",
      price: "$59.99",
    },
    {
      name: "GTA Online",
      description: "Multiplayer action-adventure game",
      price: "Free with GTA V",
    },
    {
      name: "L.A. Noire",
      description: "Detective action-adventure game",
      price: "$19.99",
    },
    {
      name: "Bully",
      description: "Action-adventure game set in a school",
      price: "$14.99",
    },
    {
      name: "Max Payne 3",
      description: "Third-person shooter game",
      price: "$19.99",
    },
    {
      name: "Midnight Club",
      description: "Racing game series",
      price: "$24.99",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 p-8">
      <Link href="/games">
        {" "}
        <span className="group text-2xl font-bold items-center justify-start flex gap-x-3">
          Discover Something New
          <span className="text-white text-sm group-hover:translate-x-2 transition-all duration-300">
            <ChevronRight />
          </span>
        </span>
      </Link>
      <div className="flex flex-row justify-between space-x-4 w-full">
        {games.map((game, index) => (
          <div
            key={index}
            className="w-full aspect-[16/15] bg-black/25 rounded-3xl group relative overflow-hidden"
            style={{
              backgroundImage: `url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="absolute w-full h-full bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="p-4 bg-black/85 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">
                  {game.name}
                </h3>
                <p className="text-sm text-gray-300 mb-2">{game.description}</p>
                <p className="text-lg font-semibold text-green-400">
                  {game.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverNewGames;
