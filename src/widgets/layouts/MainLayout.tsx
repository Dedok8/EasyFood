import { useState } from "react";
import Sidebar from "@/shared/ui/aside/Aside";
import { Outlet } from "react-router";
import { Menu, X } from "lucide-react";

function Mainlayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative overflow-x-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[110] p-2 bg-[#f6a609] text-white rounded-md md:hidden shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />

      {isOpen && (
        <div
          className="fixed inset-0  z-[90] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <main className="flex-1 md:ml-[280px] p-6 transition-all">
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;
