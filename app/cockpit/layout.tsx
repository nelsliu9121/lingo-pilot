import {PropsWithChildren} from "react";
import Sidebar from "@/components/layout/sidebar";

export default function CockpitLayout({children}: PropsWithChildren) {
  return (
    <main className="min-h-screen">
      <aside className="fixed inset-y-0 left-0 w-[8vw] bg-primary-800 shadow-xl">
        <Sidebar />
      </aside>

      <div className="ml-[8vw]">
        {children}
      </div>
    </main>
  );
}
