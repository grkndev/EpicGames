import { Navigation } from "@/components/Navigation/menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
export default function NavBar() {
  return (
    <div className="p-6 flex justify-between items-center border-b border-woodsmoke-900">
      <div className="flex justify-start items-center space-x-6">
        <span className="font-bold text-3xl">EPIC GAMES</span>
        <Navigation />
      </div>
      <div className="flex justify-end items-center space-x-6">
        <Button
          variant={"ghost"}
          className="text-white/60 hover:bg-transparent hover:text-white"
        >
          Wishlist
        </Button>
        <Button
          variant={"ghost"}
          className="text-white/60 hover:bg-transparent hover:text-white"
        >
          <span>Cart</span>
          <Badge
            variant={"secondary"}
            className="ml-2 aspect-square w-2 text-center items-center justify-center"
          >
            1
          </Badge>
        </Button>
        <Button
          variant={"ghost"}
          className="text-white/60 hover:bg-transparent hover:text-white"
        >
          Friends
        </Button>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent hover:text-white flex items-center space-x-2"
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>John Doe</span>
        </Button>
      </div>
    </div>
  );
}
