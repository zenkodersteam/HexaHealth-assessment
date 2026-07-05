import Header from "./components/Header";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Description />
        <Features />
      </main>
      <Footer />
    </>
  );
}
