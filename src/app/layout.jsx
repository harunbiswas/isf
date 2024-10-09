"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Social from "@/components/home/Social";
import "../../i18n";

import { usePathname } from "next/navigation";

import LanguageSync from "@/components/home/LanguageSync";
import "../sass/style.scss";

function RootLayout({ children }) {
  const pathname = usePathname();

  const isAdminRoute =
    pathname.startsWith("/admin") || pathname.startsWith("/login");

  return (
    <html lang="en">
      <body>
        <main>
          <LanguageSync />
          {!isAdminRoute && <Header />}
          {children}
          {!isAdminRoute && <Social />}
          {!isAdminRoute && <Footer />}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
