import FeaturedCards from "@/components/Featured/FeaturedCards";
import DiscoverNewGames from "@/components/Featured/DiscoverNewGames";
import NavBar from "@/components/NavBar/navbar";
import ShowRoomCard from "@/components/ShowRoom/ShowRoomCard";
import SuperDeals from "@/components/Featured/SuperDeals";
import Sellers from "@/components/Featured/Sellers";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="p-6 flex justify-between w-full space-x-8">
        <ShowRoomCard />
        <FeaturedCards />
      </div>
      <div className="p-6 flex flex-col justify-between w-full space-y-8">
        <DiscoverNewGames />
        <DiscoverNewGames />
        <SuperDeals />
        <Sellers />
      </div>
      <div className="flex flex-col items-center justify-center p-6 space-y-3 my-32">
        <span className="text-4xl font-bold">Keep scrolling for more</span>
        <span className="text-lg text-gray-400">
          Scroll down to see more games and deals
        </span>
      </div>
      <div>
        <Sellers />
      </div>
    </div>
  );
}
