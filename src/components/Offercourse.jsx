import '../styles/Offer-courses.css';

function OfferCourse() {
  return (
    <>
      <h1 className="title">Courses We Offer</h1>
      <div className="offer-course">
        <div className="card" style={{ width: '18rem' }}>
          {/* <img  src={ComputerLaab} className="card-img-top" alt="Computer Lab" /> */}
          <div className="card-body">
            <h3 className="card-titile">Pre-Primary</h3>
            <p className="card-text">
              Our unique approach to Montessori style learn ing for young
              preschoolers is designed to foster independent lear ning and
              satisfy the natural energy and curiosity of this age group
            </p>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          {/* <img  src={ComputerLaab} className="card-img-top" alt="Computer Lab" /> */}
          <div className="card-body">
            <h3 className="card-titile">Primary</h3>
            <p className="card-text">
              The expectations for excellence in elementary education have
              dramatically changed in the last 10 years. Today’s world requires
              that our children grow up to be criti cal thinkers and problem
              solvers.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          {/* <img  src={ComputerLaab} className="card-img-top" alt="Computer Lab" /> */}
          <div className="card-body">
            <h3 className="card-titile">Secondary</h3>
            <p className="card-text">
              Secondary Level Education consists of Schooling from Grade 9 to
              Grade 10. We are committed to preparing teachers with the
              knowledge and skills needed for the 21st century learning
              environments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default OfferCourse;
