import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
    const bgImage = '/assets/img/footer-bg-2.svg'; 
    return (
 <footer className="cs_footer cs_style_1 cs_type_1 cs_accent_bg cs_bg_filed cs_white_color" style={{ backgroundImage: `url(${bgImage})`}}  >
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_footer_top position-relative">
          <ul className="cs_location_list cs_mp_0">
            <li>
              <span className="cs_location_icon cs_center cs_theme_color_4 cs_radius_100">
              <i className="bi bi-telephone-fill"></i></span>
              <a href="tel:+917892104196">+91 78921 04196</a>
            </li>
            <li>
              <span className="cs_location_icon cs_center cs_theme_color_4 cs_radius_100">
             <i className="bi bi-envelope-fill"></i></span>
              <a href="mailto:support@shikshaflow.cloud">support@shikshaflow.cloud</a>
            </li>
            <li>
              <span className="cs_location_icon cs_center cs_theme_color_4 cs_radius_100">
              <i className="bi bi-geo-alt-fill"></i></span>
              <p className="mb-0">Bangalore, Karnataka, India</p>
            </li>
          </ul>
        </div>

        <div className="cs_footer_main">
          <div className="cs_footer_widget_wrapper">

            {/* BRAND */}
          <div className="cs_footer_widget cs_text_widget">
  <div className="cs_brand cs_mb_32">
    <span
      style={{
        fontSize: "28px",
        fontWeight: "700",
        letterSpacing: "0.5px",
        fontFamily: "var(--body-color-font)",
      }}
    >
      Shiksha<span style={{ color: "#25D366" }}>Flow</span>
    </span>
  </div>
              <p className="cs_mb_32">
                ShikshaFlow simplifies school management with WhatsApp-based ERP for attendance, marks, communication, and automation.
              </p>
              <div className="cs_social_links cs_style_1 cs_heading_color">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-youtube"></i></a>
              </div>
            </div>

            {/* FEATURES */}
            <div className="cs_footer_widget cs_links_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_29">Features</h3>
              <ul className="cs_footer_menu cs_mp_0">
                <li><Link href="#">School ERP</Link></li>
                <li><Link href="#">WhatsApp Automation</Link></li>
                <li><Link href="#">Student Tracking</Link></li>
                <li><Link href="#">Analytics & Reports</Link></li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="cs_footer_widget cs_help_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_29">Company</h3>
              <ul className="cs_footer_menu cs_mp_0">
                <li><Link href="#">Why Choose Us</Link></li>
                <li><Link href="#">How It Works</Link></li>
                <li><Link href="#">Success Stories</Link></li>
                <li><Link href="#">Testimonials</Link></li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="cs_footer_widget cs_contact_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_29">Resources</h3>
              <ul className="cs_footer_menu cs_mp_0">
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Support</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

<div className="cs_footer_bottom position-relative">
  <div className="container">
    <div className="cs_footer_text cs_white_color text-center">
      <a 
        href="https://www.rctechbox.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        Copyright &copy; <span>{new Date().getFullYear()}</span> RCERP TECHNOLOGIES PVT LTD. All rights reserved.
      </a>
    </div>
  </div>
</div>
    </footer>
    );
};

export default Footer1;