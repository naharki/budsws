import '../styles/Card.css';
import ComputerLaab from '../icons/computer.png';
import sport from '../icons/sport.png';
import  Auditoriumhall from '../icons/auditorium.png';
import hostel from '../icons/hostel.png';
import transportation from '../icons/school-bus.png';
import library from '../icons/library-shelf.png';

function Card ()  {
return(
  <>
  <h1 className='facilities-title'>Our Facilities</h1>
  <div className='facilities'>
<div className="card " style={{width: '18rem'}}>
  <img  src={sport} className="card-img-top" alt="sport" />
    <div className="card-body text-center">
      <h3 className="card-titile">Sport </h3>
      <p className="card-text">Buds Academy is school which has some truly outstanding sports facilities.</p>
    </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img  src={ComputerLaab} className="card-img-top" alt="Computer Lab" />
    <div className="card-body">
      <h3 className="card-titile">Computer lab</h3>
        <p className="card-text"> A computer lab is a space where computer training are provided to Computer Students.</p>
    </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img  src={Auditoriumhall} className="card-img-top" alt="Auditorium Hall" />
    <div className="card-body">
      <h3 className="card-titile">Auditorium Hall</h3>
        <p className="card-text">Spacious Auditorium hall for regular dance classes and program</p>
    </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img  src={transportation} className="card-img-top" alt="transportation" />
    <div className="card-body">
      <h3 className="card-titile">Transportation</h3>
        <p className="card-text">Transportation service to students from in and around the locality.</p>
    </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img  src={library} className="card-img-top" alt="Library" />
    <div className="card-body">
      <h3 className="card-titile">Library</h3>
        <p className="card-text">Library classes are provided to the students as apart of daily learning activity.</p>
    </div>
</div>

<div className="card" style={{width: '18rem'}}>
  <img  src={hostel} className="card-img-top" alt="Hostel" />
    <div className="card-body">
      <h3 className="card-titile">School Hostel </h3>
        <p className="card-text">Our hostel features a large room with separate beds, a shared bathroom, and a communal kitchen.</p>
    </div>
</div>
</div>
</>
)
}
export default Card;