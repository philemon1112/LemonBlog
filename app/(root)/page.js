import HeroText from '@/components/Hero/HeroText'
import HomeSection from '@/components/Sections/HomeSection'
import TrendingSection from '@/components/Sections/TrendingSection'

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className=" ">
      <HeroText />
      <TrendingSection />
      <HomeSection />
    </main>
  )
}
