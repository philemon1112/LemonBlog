import TrendingCards from "../Cards/TrendingCards";


const MarqueeText = () => {

  const trendingTopics = [
    {
      id:1,
      title: "web 3.0"
    },
    {
      id:2,
      title: "Slightly Techie"
    },
    {
      id:3,
      title: "AI / ML"
    },
    {
      id:3,
      title: "Elon Musk"
    },
    {
      id:4,
      title: "Twitter vs Threads"
    },
    {
      id:5,
      title: "Marvel"
    },
    {
      id:6,
      title: "Accra, Ghana"
    },
    {
      id:7,
      title: "Occupy julorbi house"
    },
    {
      id:8,
      title: "Golden boy"
    },
    {
      id:9,
      title: "Javascript"
    },
    {
      id:10,
      title: "Flutter"
    },
    {
      id:11,
      title: "Loki Season 2"
    },
    {
      id:12,
      title: "NSS"
    },
    {
      id:13,
      title: "The Boys: Gen V"
    }
  ]
  return (
      <div className="relative flex overflow-x-hidden bg-black">
            <div className="py-4 animate-marquee whitespace-nowrap text-white">
              {trendingTopics.map((topic)=> (
                  <TrendingCards key={topic.id} text={topic.title} />
              ))}
            </div>

            <div className="absolute top-0 py-4 animate-marquee2 text-white whitespace-nowrap">
              {trendingTopics.map((topic)=> (
                  <TrendingCards key={topic.id} text={topic.title} />
              ))}
            </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-950"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-950 "></div>
</div>
  );
}

export default MarqueeText;
