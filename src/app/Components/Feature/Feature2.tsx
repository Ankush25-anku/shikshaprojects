import Image from "next/image";

const Feature2 = () => {
    return (
 <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_1 cs_type_2 position-relative z-1">
          <div className="row cs_gap_y_50 position-relative z-1">

            {/* Image */}
            <div className="col-lg-7">
              <div className="cs_card_thumbnail position-relative">
           <Image 
  src="/assets/img/tablet-mockup1.png" 
  alt="img" 
  width={746} 
  height={560}
  style={{ borderRadius: "20px" }}
/>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-5">
              <div className="cs_card_content">

                {/* 🔥 Heading */}
                <div className="cs_section_heading cs_style_1 cs_mb_33">
                  <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                    <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
                    <span>Why Choose ShikshaFlow</span>
                    <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
                  </div>

                  <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInUp">
                    A Smarter, Faster & App-Free School ERP
                  </h2>

                  <p className="cs_card_desc mb-0">
                    ShikshaFlow simplifies school management by combining automation, communication, and intelligence — all inside WhatsApp.
                    Experience a new way of managing schools without complexity.
                  </p>
                </div>

                {/* 🔥 Benefits */}
                <div className="cs_iconbox_wrapper_3">

                  {/* 1 */}
                  <div className="cs_iconbox cs_style_5">
                    <span className="cs_iconbox_icon cs_center cs_radius_100 cs_mb_18">
                      <Image src="/assets/img/icons/safety.svg" alt="img" width={37} height={37} />
                    </span>
                 <div className="cs_iconbox_info">
  <h3 className="cs_fs_18 cs_semibold cs_mb_4">
    Secure & Reliable Data
  </h3>
  <p className="mb-0">
    Keep all student and school data secure, organized, and accessible anytime with enterprise-level security.
  </p>
</div>
                  </div>

                  {/* 2 */}
                  <div className="cs_iconbox cs_style_5">
                    <span className="cs_iconbox_icon cs_bg_1 cs_center cs_radius_100 cs_mb_18">
                      <Image src="/assets/img/icons/analytics-2.svg" alt="img" width={45} height={36} />
                    </span>
                    <div className="cs_iconbox_info">
                      <h3 className="cs_fs_18 cs_semibold cs_mb_4">
                        Real-Time Insights
                      </h3>
                      <p className="mb-0">
                        Track student performance, attendance, and enquiries with real-time updates and smart reporting.
                      </p>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="cs_iconbox cs_style_5">
                    <span className="cs_iconbox_icon cs_bg_2 cs_center cs_radius_100 cs_mb_18">
                      <Image src="/assets/img/icons/automation.svg" alt="img" width={36} height={36} />
                    </span>
                    <div className="cs_iconbox_info">
                      <h3 className="cs_fs_18 cs_semibold cs_mb_4">
                        WhatsApp Automation
                      </h3>
                      <p className="mb-0">
                        Automate communication with parents — from homework to marks — all through WhatsApp chatbot instantly.
                      </p>
                    </div>
                  </div>

                  {/* 4 */}
                  <div className="cs_iconbox cs_style_5">
                    <span className="cs_iconbox_icon cs_bg_3 cs_center cs_radius_100 cs_mb_18">
                      <Image src="/assets/img/icons/easy-intinsive.svg" alt="img" width={37} height={36} />
                    </span>
                    <div className="cs_iconbox_info">
                      <h3 className="cs_fs_18 cs_semibold cs_mb_4">
                        No App • Easy To Use
                      </h3>
                      <p className="mb-0">
                        No downloads, no training required. Anyone can use Shiksha Flow easily through familiar WhatsApp interface.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Shapes */}
        <div className="cs_vector_shape_8 position-absolute">
          <Image src="/assets/img/vector-11.svg" alt="img" width={79} height={79} />
        </div>
        <div className="cs_vector_shape_9 position-absolute"></div>

      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="cs_height_90 cs_height_lg_90"></div>
    </section>
    );
};

export default Feature2;