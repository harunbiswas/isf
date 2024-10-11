"use client";

import { isLoggedIn } from "@/utils/auth"; // Utility function to check login state
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = dynamic(() => import("@/components/dashboard/Sidebar"), {
  ssr: false, // Disable SSR for Sidebar
});

const AdminLayout = ({ children }) => {
  const [login, setLogin] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = isLoggedIn();
      if (!loggedIn) {
        router.push("/login");
      } else {
        setLogin(true);
      }
    };

    checkLoginStatus();
  }, [router]);

  if (login === null) {
    // Loading state while checking login status
    return <div>Loading...</div>;
  }

  return (
    <section>
      {login && (
        <div className="main">
          <Sidebar /> {children}
        </div>
      )}
    </section>
  );
};

export default AdminLayout;
