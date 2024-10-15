import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Email from "@/components/Email";
import Reklam from "@/components/Reklam";
import Navbar from "@/components/Navbar";
import Futures from "@/components/Futures";
import Stat from "@/components/Stat";


export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero/>
      <Reklam/>
      <Futures/>
      <Stat/>
      <Email/>
      <hr className="border-none h-[1px] bg-green-100 mx-5 "/>
      <Footer/>
      
    </>
  );
}
