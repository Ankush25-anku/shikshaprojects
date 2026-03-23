"use client"
import { useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import Image from 'next/image';

const Story1 = () => {

        const bgImage = '/assets/img/videobg1.jpg';

        const [iframeSrc, setIframeSrc] = useState('about:blank');
        const [toggle, setToggle] = useState(false);
      
        const handelClick = () => {
          setIframeSrc("https://www.youtube.com/embed/HC-tgFdIcB0");
          setToggle(!toggle);
        };
        const handelClose = () => {
          setIframeSrc('about:blank');
          setToggle(!toggle);
        };   

    return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>

      <div className="container">
        <div className="cs_card cs_style_1 cs_type_5">
          <div className="row cs_gap_y_30">

            <div className="col-lg-5 order-lg-2">
              <a onClick={handelClick} aria-label="Click to play video" className="cs_video cs_style_1 cs_center cs_video_open cs_bg_filed cs_radius_15 position-relative" style={{ backgroundImage: `url(${bgImage})`}}>
                <span className="cs_player_btn cs_style_1 cs_center cs_radius_100 cs_theme_bg_3 cs_white_color position-relative">
                  <i className="bi bi-play-fill"></i>
                </span>
                <div className="cs_vector_shape_5 position-absolute">
                  <Image src="/assets/img/vector-11.svg" alt="img" width={97} height={97} />
                </div>
              </a>
            </div>

            <div className="col-lg-7 order-lg-1">
              <div className="cs_card_content">

                <div className="cs_section_heading cs_style_1 cs_mb_20">
                  <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                    <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
                    <span>Success Story</span>
                    <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
                  </div>

                  <h2 className="cs_section_title cs_fs_48 cs_semibold text-capitalize mb-0 wow fadeInDown">
                    How Schools Simplified Communication <br/> Using ShikshaFlow
                  </h2>
                </div>

                <p className="cs_card_desc cs_mb_51">
                  A leading school transformed its communication system by adopting Shiksha Flow.
                  With WhatsApp-based ERP, parents now receive instant updates on student marks,
                  attendance, homework, and holidays — eliminating the need for mobile apps and
                  improving response time significantly.
                </p>

                {/* <div className="cs_btns_group">

                  <a href="#" aria-label="Get started button" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
                    <span>View Full Story</span>
                    <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                  </a>

                  <div className="cs_client_info_wrapper">
                    <Image src="/assets/img/customers-group-2.png" alt="img" width={182} height={58} />

                    <div>
                      <h3 className="cs_fs_18 cs_normal mb-0">Trusted by Schools</h3>
                      <p className="mb-0">
                        <span className="cs_theme_color_5">
                          <i className="bi bi-star-fill"></i>
                        </span> 4.9 (10k+ Reviews)
                      </p>
                    </div>
                  </div>

                </div> */}

              </div>
            </div>

          </div>
        </div>
      </div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}        
      ></VideoModal>

    </section>
    );
};

export default Story1;