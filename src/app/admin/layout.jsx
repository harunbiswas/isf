import Sidebar from "@/components/dashboard/Sidebar";

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
