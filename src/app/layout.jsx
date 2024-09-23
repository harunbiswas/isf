import Header from "@/components/Header";

import Footer from "@/components/Footer";
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
        <Footer />
      </body>
    </html>
  );
}
