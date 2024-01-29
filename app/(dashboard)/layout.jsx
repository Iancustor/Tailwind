import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <div className="w-[20%] bg-slate-100 min-h-screen">
          <Sidebar />
        </div>
        <main className="w-[80%]  bg-white min-h-screen">{children}</main>
      </div>
    </main>
  );
}
