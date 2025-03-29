import Features from "@/components/ui/features";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import NavBar from "@/components/ui/nav-bar";
import Performance from "@/components/ui/performance";

const IndexPage = () => {
  return (
    <div className=" min-h-screen relative overflow-hidden">
      <NavBar />
      <Hero />
      <Features />
      <Performance />
      <Footer />
    </div>
  )
}

export default IndexPage;