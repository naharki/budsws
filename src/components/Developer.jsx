import '../styles/Developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

function Developer() {

    return (
    <div className="intro" >
      <h3>Sujan Naharki</h3>
      <div className="sujan-intro">
        <p>
          Ultimate Tech Solutions In Nepal Desktop App - Web Development -
          Mobile Apps - Graphic Works
        </p>
        <FontAwesomeIcon icon={faMugHot} />
        <p>Phone: 9861913770 </p>
        <p>E-mail:sujannaharki2@gmail.com </p>
        <p>Our Partners : We've More than 150+ Active Genuine Clients</p>
      </div>
    </div>
  );
}
export default Developer;
