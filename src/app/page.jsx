import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import FoodMenu from "@/components/home/FoodMenu";
import Gallery from "@/components/home/Gallery";
import Offers from "@/components/home/Offers";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "Indian street food",
  description: "Best quality Indian food",
};

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <About />
      <FoodMenu />
      <Testimonials />
      <Offers />
      <Gallery />
      {/* <Contact /> */}
    </div>
  );
}
