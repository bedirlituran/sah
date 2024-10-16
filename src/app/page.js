import Hero from "@/components/Hero";
import Email from "@/components/Email";
import Reklam from "@/components/Reklam";
import Futures from "@/components/Futures";
import Stat from "@/components/Stat";
import WhatsAppButton from "@/components/WhatsAppButton";


export default function Home() {
  return (
    <>
      <Hero/>
      <WhatsAppButton/>
      <Reklam/>
      <Futures/>
      <Stat/>
      <Email/>
    </>
  );
}
