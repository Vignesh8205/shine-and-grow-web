import AwardCarousel from "./components/Carousel/AwardCaraousel";
import ContactWidget from "./components/contactWidget/contactWidget";
import EnrollPopup from "./components/enrollForm/EnrollPopup";
import ImageGallery from "./components/Gallery/Gallery2";
import GalleryPage from "./components/Gallery/Gallerypage";
import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from "./components/index";
import GalleryPageMain from "./pages/Index";


function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      {/* <GalleryPage /> */}

<GalleryPageMain/>

      <ImageGallery />
      <AwardCarousel />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
      <ContactWidget />

      <EnrollPopup timeout={5000} />
    </div>
  );
}

export default App;
