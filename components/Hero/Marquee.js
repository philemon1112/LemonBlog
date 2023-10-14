import TrendingCards from "../Cards/TrendingCards";


const MarqueeLogos = () => {
  return (
      <div className="relative flex overflow-x-hidden bg-black">
            <div className="py-4 animate-marquee whitespace-nowrap text-white">
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
            </div>

            <div className="absolute top-0 py-4 animate-marquee2 text-white whitespace-nowrap">
            <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
                <TrendingCards />
            </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-950"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-950 "></div>
</div>
  );
}

export default MarqueeLogos;
