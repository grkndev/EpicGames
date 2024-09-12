import FeaturedCards from "@/components/Featured/FeaturedCards";
import NavBar from "@/components/NavBar/navbar";
import ShowRoomCard from "@/components/ShowRoom/ShowRoomCard";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="p-6 flex justify-between w-full space-x-8">
        <ShowRoomCard />

        <FeaturedCards />
      </div>
      <div className="flex flex-col space-y-4  p-8">
        <span className="text-3xl font-bold">Featured Games</span>
        <div className="flex flex-row justify-between  space-x-4 w-full">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="w-full aspect-[16/15]  bg-black/85 rounded-3xl"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
