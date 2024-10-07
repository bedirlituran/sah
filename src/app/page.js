import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Email from "@/components/Email";
import Slider from "@/components/Slider";
import Reklam from "@/components/Reklam";
import Faq from "@/components/Faq";
import Futures from "@/components/Futures";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Pricing/>
      <Slider/>
      <Futures/>
      <Reklam/>

      <Faq/>
      <Email/>
      <hr className="border-none h-[1px] bg-green-100 mx-5 "/>
      <Footer/>
      
    </>
  );
}
