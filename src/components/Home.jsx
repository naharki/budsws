import Courses from "./Courses";
import Footer from "./Footer";
import OfferCourse from "./Offercourse";

function Home() {
  return (
    <>
      <section className="Header"></section>
      <section className="body">
        <OfferCourse />
        <Courses />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}
export default Home;
