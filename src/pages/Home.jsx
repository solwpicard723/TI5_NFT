import Banner from "../components/Home/Banner";
import Hero from "../components/Home/Hero";
import Info from "../components/Home/Info";
import Intro from "../components/Home/Intro";
import Signs from "../components/Home/Signs";

export default function Home({price,mint,totalSupply}) {
  return (
    <main>
      <Hero  price={price} mint={mint} totalSupply={totalSupply}/>
      <Intro />
      <Banner />
      <Info />
      <Signs />
    </main>
  );
}
