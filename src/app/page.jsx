import About from "@/components/home/About";
import Enquiry from "@/components/home/Enquiry";
import Header from "@/components/home/Header";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <div className="bg-[#fce7ca]">
      <Header />
      <About />
      <Products />
      <Enquiry />
    </div>
  );
}
