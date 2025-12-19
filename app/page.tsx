import Image from "next/image";
import Navbar from  "@/app/components/Navbar"
import Hero from  "@/app/components/Hero"
import Capsule from  "@/app/components/Capsule"
import Accessory from  "@/app/components/Accessory"
import Footer from  "@/app/components/Footer"

export default function Home() {
  return (
<div>
  <Navbar/>
  <Hero/>
  <Capsule/>
  <Accessory/>
  <Footer/>
</div>
  );
}
