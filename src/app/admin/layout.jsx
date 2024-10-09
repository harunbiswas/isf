import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/dashboard/Sidebar"), {
  ssr: false, // Set to false if you want to disable server-side rendering for this component
});

export const metadata = {
  title: "Dashboard ",
  description: "backend application",
};

export default function LoginLayout({ children }) {
  return (
    <main className="main">
      <Sidebar /> {children}
    </main>
  );
}
