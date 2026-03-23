import Image from "next/image";
import Link from "next/link";

const Feature1 = () => {
    return (
 <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_2 position-relative z-1">
          <div className="row cs_gap_y_40">

            {/* Image Side */}
            <div className="col-lg-6 order-lg-2">
              <div className="cs_card_thumbnail">
                <Image src="/assets/img/dashboard-2.png" alt="img" width={924} height={666} style={{ borderRadius: "20px" }} />
              </div>
            </div>

            {/* Content Side */}
            <div className="col-lg-6 order-lg-1">
              <div className="cs_card_content">

                {/* 🔥 Section Heading */}
                <div className="cs_section_heading cs_style_1 cs_mb_34">
                  <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                    <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
                    <span>Smart ERP Experience</span>
                    <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
                  </div>

                  <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInUp">
                    Manage Your Entire School Through WhatsApp
                  </h2>

                  <p className="mb-0">
                    ShikshaFlow replaces complex school ERP systems with a simple, powerful WhatsApp-based platform.
                    From student data to communication, everything is automated, instant, and accessible — without any app installation.
                  </p>
                </div>

                {/* 🔥 Feature 1 */}
                <div className="cs_service_item cs_radius_15 cs_gray_bg_2 cs_mb_24 cs_active">
                  <h3 className="cs_service_title cs_fs_24 cs_semibold cs_mb_8">
                    Instant Student Information Access
                  </h3>
                  <p className="mb-0">
                    Parents can instantly get student marks, attendance, homework, and updates through WhatsApp chatbot.
                    No login, no app — just a simple message and real-time response.
                  </p>
                </div>

                {/* 🔥 Feature 2 */}
                <div className="cs_service_item cs_radius_15 cs_mb_48">
                  <h3 className="cs_service_title cs_fs_24 cs_semibold cs_mb_8">
                    Automated Enquiry & Follow-Up System
                  </h3>
                  <p className="mb-0">
                    Capture every student enquiry and automatically follow up through WhatsApp.
                    Increase admissions with smart tracking, reminders, and zero missed opportunities.
                  </p>
                </div>

                {/* 🔥 CTA Section */}
                <div className="cs_btns_group">
                  <Link href="/contact" aria-label="Get started button" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
                    <span>Get Free Demo</span>
                    <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                  </Link>

                  {/* <div className="cs_client_info_wrapper">
                    <Image src="/assets/img/customers-group.png" alt="img" width={151} height={58} />
                    <div>
                      <h3 className="cs_fs_30 cs_semibold mb-0">100+ <span>Schools</span></h3>
                      <p className="cs_heading_color mb-0">Using Shiksha Flow</p>
                    </div>
                  </div> */}
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="cs_vector_shape_6 position-absolute"></div>
        <div className="cs_vector_shape_7 position-absolute"></div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Feature1;