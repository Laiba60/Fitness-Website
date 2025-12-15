import React from 'react'

const Footer = () => {
  return (
   <footer className="footer" id="footer">
            <div className="parallax-overlay"></div>
            <div className="container">
                <div className="main-footer">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-3">
                            <div className="footer_first_row">
                                <img src="assets/images/logo/footer-logo.png" alt="Footer Logo Image" className="img-fluid"/>
                                <div className="footer-social-list">
                                    <a href="https://www.facebook.com/" className="facebook-ic"><i className="ri-facebook-fill icons"></i></a>
                                    <a href="https://twitter.com/" className="twitter-ic"><i class="ri-twitter-fill icons"></i></a>
                                    <a href="https://www.instagram.com/" className="instagram-ic"><i className="ri-instagram-line icons"></i></a>
                                    <a href="https://www.youtube.com/" className="youtube-ic"><i class="ri-youtube-fill icons"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="footer_second_row locate_places text-center">
                                <div className="place_detail">
                                    <i className="ri-map-pin-line"></i>
                                </div>
                                <p>121 Manila St. Brookly, CA</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="footer_third_row locate_places text-center">
                                <div className="place_detail">
                                    <i className="ri-smartphone-line"></i>
                                </div>
                                <p><a href="tel:+012345678899">+01 234 567 8899</a></p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="footer_forth_row locate_places text-center">
                                <div className="place_detail">
                                    <i className="ri-mail-unread-line"></i>
                                </div>
                                <p><a href="mailto:contact@fitzaro.com">contact@fitzaro.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-footer">
                    <div className="footer-copyright">
                        <p className="m-0">© 2022 FITZARO. All Rights Reserved.</p>
                    </div>
                    <div className="copyright_privacy">
                        <a href="javascript:void(0);">Privacy Policy</a><span>|</span><a href="javascript:void(0);">Terms &amp; Condition</a>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer