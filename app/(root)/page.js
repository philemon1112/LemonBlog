import HeroCard from '@/components/Hero/HeroCard'
import HeroText from '@/components/Hero/HeroText'
import MarqueeLogos from '@/components/Hero/Marquee'
import MarqueeDemo from '@/components/Hero/MarqueeTry'
import HomeSection from '@/components/Sections/HomeSection'
import TrendingSection from '@/components/Sections/TrendingSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" ">
      <HeroText />
      <TrendingSection />
      <HomeSection />
    </main>
  )
}
