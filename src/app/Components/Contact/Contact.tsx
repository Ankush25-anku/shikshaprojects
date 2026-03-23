import Image from "next/image";

const Contact = () => {
  const bgImage = '/assets/img/contact3.jpg';

  return (
    <div>
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_30 align-items-center">
            
            {/* LEFT SIDE */}
            <div className="col-lg-6">
              <div className="cs_contact_desc">
                <ul className="cs_contact_info_list cs_mp_0">
                  
                  <li>
                    <div className="cs_iconbox cs_style_6">
                      <span className="cs_iconbox_icon cs_center cs_radius_100 position-relative">
                        <Image src="/assets/img/icons/call.svg" alt="call" width={30} height={30} />
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_white_color cs_heading_font cs_mb_4">Call Us Anytime</p>
                        <a href="tel:+917892104196" className="cs_fs_24 cs_bold cs_white_color cs_heading_font">
                          +91 78921 04196
                        </a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="cs_iconbox cs_style_6">
                      <span className="cs_iconbox_icon cs_center cs_radius_100 position-relative">
                        <Image src="/assets/img/icons/email.svg" alt="email" width={30} height={30} />
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_white_color cs_heading_font cs_mb_4">Email Us</p>
                        <a href="mailto:rcerptechnologies@gmail.com" className="cs_fs_24 cs_bold cs_white_color cs_heading_font">
                          rcerptechnologies@gmail.com
                        </a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="cs_iconbox cs_style_6">
                      <span className="cs_iconbox_icon cs_center cs_radius_100 position-relative">
                        <Image src="/assets/img/icons/location.svg" alt="location" width={32} height={32} />
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_white_color cs_heading_font cs_mb_4">Our Office</p>
                        <p className="cs_fs_24 cs_bold cs_white_color cs_heading_font mb-0">
                          SEEGEHALLI, Karnataka, India
                        </p>
                      </div>
                    </div>
                  </li>

                </ul>

                <a
                  className="cs_video cs_style_1 cs_center cs_video_open cs_bg_filed position-relative"
                  style={{ backgroundImage: `url(${bgImage})` }}
                >
                </a>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="col-lg-6">
              <div className="cs_contact_form_wrapper">
                <h2 className="cs_fs_36 cs_semibold cs_mb_21">
                  Let’s Build Something Great Together 🚀
                </h2>

                <p className="cs_mb_26">
                  Have questions or need help with your school or business management system? 
                  Reach out to us and our team will get back to you within 24 hours.
                </p>

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="cs_contact_form row cs_gap_y_20"
                  id="cs_form"
                >
                  {/* 🔥 REPLACE THIS WITH YOUR REAL KEY */}
                  <input type="hidden" name="access_key" value="97443f06-655a-4a4e-adbe-8e3c6936dc93" />

                  {/* 🔥 EMAIL SETTINGS */}
                  <input type="hidden" name="to" value="rcerptechnologies@gmail.com" />
                  <input type="hidden" name="subject" value="New Contact Form Submission - ShikshaFlow" />

                  <div className="col-sm-6">
                    <label htmlFor="name">Full Name*</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your full name"
                      className="cs_form_field cs_radius_8"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="email">Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="cs_form_field cs_radius_8"
                      required
                    />
                  </div>

                  <div className="col-sm-12">
                    <label htmlFor="message">Your Message*</label>
                    <textarea
                      name="message"
                      rows={6}
                      id="message"
                      placeholder="Tell us about your requirement..."
                      className="cs_form_field cs_radius_8"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="cs_btn cs_style_1 cs_bg_1 cs_semibold cs_white_color text-capitalize"
                    >
                      <span>Send Message</span>
                      <span className="cs_btn_icon">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </button>

                    <div id="cs_result" className="cs_result"></div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* MAP */}
      <div className="cs_location_map">
        <iframe
          src="https://maps.google.com/maps?q=13.0118195,77.7607226&z=17&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "450px", border: 0 }}
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;