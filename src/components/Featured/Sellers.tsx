import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
export default function Sellers() {
  return (
    <div className="grid grid-cols-3 gap-8 px-8 pt-16">
      <div className="w-full border-r border-gray-700 pr-8 space-y-4">
        <h1 className="text-2xl font-bold">Top Sellers</h1>
        <div className="flex flex-col space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card
              key={index}
              className=" items-center justify-center bg-woodsmoke-900/25 border-none rounded-xl"
            >
              <CardContent className="flex flex-row items-center pb-0 p-3 space-x-4">
                <img
                  src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg"
                  alt=""
                  width={2000}
                  height={1000}
                  className="w-1/5 aspect-[12/16] object-cover rounded-xl"
                />
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-white">
                    Grand Theft Auto V
                  </h1>
                  <p className="text-sm text-gray-400">Racing game series</p>
                  <p className="text-lg font-bold text-white">$24.99</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full border-r border-gray-700 pr-8 space-y-4">
        <h1 className="text-2xl font-bold">Top Sellers</h1>
        <div className="flex flex-col space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card
              key={index}
              className=" items-center justify-center bg-woodsmoke-900/25 border-none rounded-xl"
            >
              <CardContent className="flex flex-row items-center pb-0 p-3 space-x-4">
                <img
                  src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg"
                  alt=""
                  width={2000}
                  height={1000}
                  className="w-1/5 aspect-[12/16] object-cover rounded-xl"
                />
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-white">
                    Grand Theft Auto V
                  </h1>
                  <p className="text-sm text-gray-400">Racing game series</p>
                  <p className="text-lg font-bold text-white">$24.99</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full pr-8 space-y-4">
        <h1 className="text-2xl font-bold">Top Sellers</h1>
        <div className="flex flex-col space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card
              key={index}
              className=" items-center justify-center bg-woodsmoke-900/25 border-none rounded-xl"
            >
              <CardContent className="flex flex-row items-center pb-0 p-3 space-x-4">
                <img
                  src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg"
                  alt=""
                  width={2000}
                  height={1000}
                  className="w-1/5 aspect-[12/16] object-cover rounded-xl"
                />
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-white">
                    Grand Theft Auto V
                  </h1>
                  <p className="text-sm text-gray-400">Racing game series</p>
                  <p className="text-lg font-bold text-white">$24.99</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
