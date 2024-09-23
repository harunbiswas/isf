import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Cta from "@/components/home/Cta";
import FoodMenu from "@/components/home/FoodMenu";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <About />
      <FoodMenu />
      <Testimonials />
      <Contact />
      <Cta />
    </div>
  );
}