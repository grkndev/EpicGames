import { Badge } from "../ui/badge";

export default function SuperDeals() {
  return (
    <div className="flex flex-col justify-between w-full space-y-4 px-8 bg-woodsmoke-900/25 p-8 rounded-3xl">
      <h1 className="text-4xl font-bold text-center">Super Deals</h1>
      <div className="flex justify-between w-full space-x-8 items-center">
        <div
          className="w-1/2 aspect-[5/2] bg-black/75 rounded-3xl justify-end h-full"
          style={{
            backgroundImage: `url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            boxShadow: "0 0 150px 1px rgba(54, 55, 68, 0.25)",
          }}
        >
          <div className="flex flex-col p-4 space-y-2 h-full justify-end">
            <h1 className="text-2xl font-bold">Grand Theft Auto V</h1>
            <div className="flex justify-start items-center space-x-4 w-full">
              <Badge variant={"secondary"} className="text-base px-4">
                %61
              </Badge>
              <p className="text-3xl font-semibold text-green-400">$59.99</p>
              <p className="text-sm text-gray-300 line-through">$69.99</p>
            </div>
          </div>
        </div>
        <div
          className="w-1/2 aspect-[5/2] bg-black/75 rounded-3xl justify-end h-full"
          style={{
            backgroundImage: `url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            boxShadow: "0 0 150px 1px rgba(54, 55, 68, 0.25)",
          }}
        >
          <div className="flex flex-col p-4 space-y-2 h-full justify-end">
            <h1 className="text-2xl font-bold">Grand Theft Auto V</h1>
            <div className="flex justify-start items-center space-x-4 w-full">
              <Badge variant={"secondary"} className="text-base px-4">
                %61
              </Badge>
              <p className="text-3xl font-semibold text-green-400">$59.99</p>
              <p className="text-sm text-gray-300 line-through">$69.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
