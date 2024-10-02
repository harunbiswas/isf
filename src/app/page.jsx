import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import FoodMenu from "@/components/home/FoodMenu";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "Indian street food",
  description: "Best quality indian food",
};

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <About />

      <FoodMenu />
      <Testimonials />
      <Contact />
      <Gallery />
    </div>
  );
}
