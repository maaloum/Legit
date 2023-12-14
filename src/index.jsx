import Footer from "./Components/Footer";
import Navbar from "./Components/Header";
import Core from "./Components/Core";

export default function Home() {
  const MainContent = () => (
    <>
      <Navbar />
      <Core />
      <Footer />
    </>
  );

  return (
    <div>
      <MainContent />
    </div>
  );
}
