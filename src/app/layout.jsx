import Header from "@/components/Header";

import Footer from "@/components/Footer";
import Social from "@/components/home/Social";
import "../sass/style.scss";

export const metadata = {
  title: "Indian street food",
  description: "Best quality indian food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Social />
        <Footer />
      </body>
    </html>
  );
}
