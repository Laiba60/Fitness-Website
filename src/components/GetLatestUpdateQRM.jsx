import React from 'react'

const GetLatestUpdateQRM = () => {
  return (
    <section className="newsletter_subscribe" id="contact">
            <div className="container">
                <div className="row fitness-update aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <div className="col-12 col-lg-7">
                        <div className="reboot-img d-flex">
                            <img src="assets/images/svg/paper-plane.svg" alt="Paper-plane" class="img-fluid"/>
                            <h2 className="m-0 text-white">Get Latest Update Of Fitness Tips</h2>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <form className="footer_subscribe_box">
                            <input type="email" className="subscribe-control" placeholder="Email Address"/>
                            <button type="submit" className="fitzaro_btn subscribe-btn"><i className="ri-arrow-right-s-line"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default GetLatestUpdateQRM