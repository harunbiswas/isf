import dynamic from "next/dynamic";

export const metadata = {
  title: "Indian street food",
  description: "Best quality Indian food",
};

// Dynamically import components with SSR disabled
const Banner = dynamic(() => import("@/components/home/Banner"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/home/About"), { ssr: false });
const FoodMenu = dynamic(() => import("@/components/home/FoodMenu"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/home/Contact"), {
  ssr: false,
});
const Gallery = dynamic(() => import("@/components/home/Gallery"), {
  ssr: false,
});

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
