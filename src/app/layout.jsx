"use client";

import "animate.css";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "wowjs/css/libs/animate.css";
import "../../i18n";
import "../sass/style.scss";
const WOW = dynamic(() => import("wowjs"), { ssr: false });

// Dynamically import components with SSR disabled
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Social = dynamic(() => import("@/components/home/Social"), {
  ssr: false,
});

function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const wow = new WOW.WOW();
      wow.init(); // Initialize WOW.js
    }
  }, []);

  const isAdminRoute =
    pathname.startsWith("/admin") || pathname.startsWith("/login");

  return (
    <html lang="en">
      <head>
        <title>Your App Title</title>
      </head>
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

export default RootLayout;
