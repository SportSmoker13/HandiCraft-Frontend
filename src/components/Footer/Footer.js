import React from 'react';
import accept from '../../images/we-accept-payment.png'
import footerLogo from '../../images/logo-white.png'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineGooglePlus } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { GrPinterest } from 'react-icons/gr';
import { BiRadioCircle } from 'react-icons/bi';

function Footer() {
  return (
      <div>
          <section className="footer">
        <div className="footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="footer-1">
                            <img src={footerLogo} alt="Footer Logo" />
                            <ul className="social-icon">
                                <li><a href="#"><AiFillFacebook /></a></li>
                                <li><a href="#"><BsTwitter /></a></li>
                                <li><a href="#"><AiFillLinkedin /></a></li>
                                <li><a href="#"><GrPinterest /></a></li>
                                <li><a href="#"><AiFillYoutube /></a></li>
                                <li><a href="#"><AiOutlineGooglePlus /></a></li>
                            </ul>
                            <div className="contact-info">
                                <p><strong>Hotline: </strong>16768</p>
                                <p><strong>Phone: </strong>(+123) 456-657878</p>
                                <p><strong>Email: </strong><a href="http://demo.epilogtheme.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2b42454d446b4e534a465b474e05484446">[email&#160;protected]</a></p>
                                <p><strong>Address: </strong>6757 Blvd, The Bronx, NY 1058, USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="footer-2">
                            <h4 className="footer-title">Information</h4>
                            <ul className="footer-menu">
                                <li><a href="#"><BiRadioCircle /> About Us</a></li>
                                <li><a href="#"><BiRadioCircle /> Contact Us</a></li>
                                <li><a href="#"><BiRadioCircle /> Privacy Policy</a></li>
                                <li><a href="#"><BiRadioCircle /> Terms & Conditions</a></li>
                                <li><a href="#"><BiRadioCircle /> Delivery Information</a></li>
                                <li><a href="#"><BiRadioCircle /> Order and Returns</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="footer-2">
                            <h4 className="footer-title">Support</h4>
                            <ul className="footer-menu">
                                <li><a href="#"><BiRadioCircle /> Help & FAQs</a></li>
                                <li><a href="#"><BiRadioCircle /> Knowledge-Based</a></li>
                                <li><a href="#"><BiRadioCircle /> Payment System</a></li>
                                <li><a href="#"><BiRadioCircle /> Order System</a></li>
                                <li><a href="#"><BiRadioCircle /> Question & Answer</a></li>
                                <li><a href="#"><BiRadioCircle /> Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="footer-2">
                            <h4 className="footer-title">Subscribe</h4>
                            <p>Subscrive to our newsletter, so that you can be the first about new product offer.</p>
                            <form action="http://demo.epilogtheme.com/mightshop-html/handicraft/index.html" method="post">
                                <input type="text" className="form-control" placeholder="Enter Your Email Address" name="subscribe" />
                                <button type="submit" className="btn btn-secondary">Subscribe Now</button>
                            </form>

                            <img className="img-fluid mt-2" src={accept} alt="We Accept" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-copyright">
                            <p className="copyright-text">Copyright &copy; 2020 Mightshop. Designed By <a href="#">Epilog Theme</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    
      </div>
  );
}

export default Footer;
