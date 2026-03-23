import Image from "next/image";
import Link from "next/link";

const Choose1 = () => {

    const bgImage = '/assets/img/whychoose-bg-1.svg';

    return (
    <section className="cs_bg_filed position-relative" style={{ backgroundImage: `url(${bgImage})`}}>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_1 cs_type_4">
          <div className="row cs_gap_y_50 position-relative z-1">

          <div className="col-lg-6 order-lg-2">
  <div className="cs_card_thumbnail">
    <Image
      src="/assets/img/phone2.png"
      alt="img"
      width={596}
      height={546}
      style={{ borderRadius: "20px" }}  // 👈 light rounded corners
    />
  </div>
</div>

            <div className="col-lg-6 order-lg-1">
              <div className="cs_card_content">

                <div className="cs_section_heading cs_style_1 cs_mb_27">
                  <div className="cs_section_subtitle cs_fs_18 cs_white_color cs_mb_22">
                    <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
                    <span>Why Choose ShikshaFlow</span>
                    <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
                  </div>

                  <h2 className="cs_section_title cs_fs_48 cs_semibold cs_white_color wow fadeInDown">
                    The Future of School ERP <br/> Powered by WhatsApp
                  </h2>

                  <p className="cs_card_desc cs_white_color mb-0">
                    ShikshaFlow redefines traditional school management by integrating powerful ERP
                    features directly into WhatsApp — enabling instant communication, automation,
                    and seamless access without the need for any mobile application.
                  </p>
                </div>

                <ul className="cs_list cs_style_2 cs_white_color cs_semibold cs_mp_0">

                  <li>
                    <span className="cs_list_icon cs_theme_color_4">
                      <i className="bi bi-check-circle-fill"></i>
                    </span>
                    <span>No App Required – Works Directly on WhatsApp</span>
                  </li>

                  <li>
                    <span className="cs_list_icon cs_theme_color_4">
                      <i className="bi bi-check-circle-fill"></i>
                    </span>
                    <span>Instant Replies to Enquiries via Smart Chatbot</span>
                  </li>

                  <li>
                    <span className="cs_list_icon cs_theme_color_4">
                      <i className="bi bi-check-circle-fill"></i>
                    </span>
                    <span>Access Marks, Homework & Attendance Anytime</span>
                  </li>

                  <li>
                    <span className="cs_list_icon cs_theme_color_4">
                      <i className="bi bi-check-circle-fill"></i>
                    </span>
                    <span>Automated Notifications for Holidays & Events</span>
                  </li>

                </ul>

                <Link
                  href="/about"
                  aria-label="About us page link"
                  className="cs_btn cs_style_1 cs_theme_bg_4 cs_fs_14 cs_heading_color cs_bold text-uppercase"
                >
                  <span>Know More</span>
                  <span className="cs_btn_icon">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="cs_height_0 cs_height_lg_80"></div>
    </section>
    );
};

export default Choose1;