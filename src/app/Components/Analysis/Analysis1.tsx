import Image from 'next/image';
import React from 'react';

const Analysis1 = () => {
    return (
<section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_1 cs_type_3">
          <div className="row cs_gap_y_50 position-relative z-1">

         <div className="col-lg-6">
  <div className="cs_card_thumbnail position-relative">
    <Image
      src="/assets/img/dashboard1.png"
      alt="img"
      width={631}
      height={461}
      style={{ borderRadius: "20px" }} // 👈 rounded corners
    />
  </div>
</div>

            <div className="col-lg-6">
              <div className="cs_card_content">
                <div className="cs_section_heading cs_style_1 cs_mb_27">

                  <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                    <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} /> 
                    <span>Insights & Smart Analytics</span>
                    <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
                  </div>

                  <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInLeft">
                    Monitor School Activities <br/> With Real-Time Intelligence
                  </h2>

                  <p className="cs_card_desc mb-0">
                    ShikshaFlow provides powerful analytics to help schools track student performance,
                    monitor enquiries, and manage communication efficiently — all integrated with
                    WhatsApp for instant access and real-time updates.
                  </p>

                </div>

                <div className="cs_iconbox_wrapper_1">

                  {/* FEATURE 1 */}
                  <div className="cs_iconbox cs_style_1 cs_type_1">
                    <span className="cs_iconbox_icon cs_center cs_accent_bg">
                      <Image src="/assets/img/icons/advanced-tracking.svg" alt="img" width={51} height={50} />
                    </span>

                    <div className="cs_iconbox_info">
                      <h3 className="cs_fs_20 cs_semibold cs_mb_1">
                        Real-Time Tracking
                      </h3>

                      <p className="mb-0">
                        Track student attendance, academic performance, and enquiry activity instantly
                        through a centralized dashboard with live updates.
                      </p>
                    </div>
                  </div>

                  {/* FEATURE 2 */}
                  <div className="cs_iconbox cs_style_1 cs_type_1">
                    <span className="cs_iconbox_icon cs_center cs_bg_1">
                      <Image src="/assets/img/icons/in-depth.svg" alt="img" width={39} height={50} />
                    </span>

                    <div className="cs_iconbox_info">
                      <h3 className="cs_fs_20 cs_semibold cs_mb_1">
                        Smart Insights & Reports
                      </h3>

                      <p className="mb-0">
                        Gain detailed insights into student progress, school operations, and communication
                        patterns to make data-driven decisions effortlessly.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="cs_star_shape_5 position-absolute">
          <Image src="/assets/img/3d-shape-2.png" alt="img" width={104} height={100} />
        </div>

      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Analysis1;