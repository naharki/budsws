// import { useState } from 'react';
import '../styles/Footer.css';
// import Sujan from './Sujan';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFacebook } from '@fortawesome/free-solid-svg-icons';

function Footer () {
    const currentYear = new Date().getFullYear();


    return(
    <div className="footer">
        <h3>About us</h3>
        <p>Buds Academy School is located in Baidam-pokhara, Kaski which was established in
2063 B.S. This school has been able to be a leading boarding school in Kaski district.

</p>
<div className="social-media">
    <a href="d">
    <i class="fa-brands fa-facebook"></i>
    </a>
    <a href="d">
        <img src="" alt="" />
    </a>
    <a href="d">
        <img src="" alt="" />
    </a>
    <a href="d">
        <img src="" alt="" />
    </a>
</div>
<div className="right-developer">
    <p>@{currentYear} Buds Academy School. All Right Reserved, Powered by <Link to='/developer'>Sujan</Link> </p>
</div>
    </div>
)
}
export default Footer;