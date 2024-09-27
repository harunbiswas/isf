"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Social from "@/components/home/Social";
import { usePathname } from "next/navigation";
import "../sass/style.scss";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isAdminRoute =
    pathname.startsWith("/admin") || pathname.startsWith("/login");

  return (
    <html lang="en">
      <body>
        <main>
          {!isAdminRoute && <Header />}
          {children}
          {!isAdminRoute && <Social />}
          {!isAdminRoute && <Footer />}
        </main>
      </body>
    </html>
  );
}
