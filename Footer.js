import React from 'react'
import "../css/footer.css"

const Footer = () => {
  return (
    <div>    
        <footer>
    <div class="footer-top">
        <div class="container">
            <div class="footer-day-time">
                <div class="row">
                    <div class="col-md-8">
                        <ul>
                            <li>Opening Hours: Mon - Friday: 8AM - 5PM</li>
                            <li>Sunday: 8:00 AM - 12:00 PM</li>
                        </ul>
                    </div>
                   
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    
                    <h4>Turkey's best shopping site</h4>
                    <p>Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche  </p>

                </div>

                <div class="col-md-4">
                    <h4>Izmir</h4>
                    <ul class="address1">
                        <li><i class="fa fa-map-marker"></i>Lorem Ipsum 132 xyz Lorem Ipsum</li>
                        <li><i class="fa fa-envelope"></i><a href="mailto:#">info@test.com</a></li>
                        <li><i class="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90">12 34 56 78 90</a></li>
                    </ul>
                </div>

                <div class="col-md-4">
                    <h4>Follow us</h4>
                    <ul class="social-icon">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-sm-5">
                    <p class="copyright text-uppercase">Copyright © 2024
                    </p>
                </div>
                <div class="col-sm-7">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
  )
}

export default Footer