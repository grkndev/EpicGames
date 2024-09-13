export default function FeaturedCards() {
  return (
    <div className="flex flex-col justify-between py-4 space-y-4 w-1/4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex h-full items-center space-x-4 bg-black/85 p-4 rounded-3xl w-full justify-between "
          style={{
            backgroundImage: `url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="flex items-center space-x-4 ">
            <img
              src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d358ca0f4ef1b724361c30dd82547992.png"
              alt=""
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl font-bold">Grand Theft Auto VI</span>
          </div>
          <div>
            <span className="text-xl font-semibold ">850.TL</span>
          </div>
        </div>
      ))}
    </div>
  );
}
