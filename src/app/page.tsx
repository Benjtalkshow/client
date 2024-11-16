import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <div className="flex w-full">
      <AppSidebar />

      <div className="flex flex-1 flex-col justify-between">
        {/* peer-hover/sideb:w-[calc(100vw-66px)] */}
        <div className="flex w-full flex-col items-center overflow-hidden px-7 py-3">
          <Navbar />
          <Tabs />
        </div>

        <div className="lg:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}
