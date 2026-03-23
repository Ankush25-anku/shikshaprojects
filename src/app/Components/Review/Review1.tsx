import Image from "next/image";

const Review1 = () => {
    const bgImage = '/assets/img/rating-bg-1.svg';

    return (
    <section className="cs_customer_review cs_bg_filed cs_radius_50" style={{ backgroundImage: `url(${bgImage})`}}>
      <div className="container">

        {/* 🔥 Heading */}
        <div className="cs_section_heading cs_style_1 text-center cs_mb_47">
          <h2 className="cs_fs_48 cs_semibold cs_white_color mb-0 wow fadeInDown">
            Schools Trust ShikshaFlow <br/> Rated 4.9/5 for Innovation & Simplicity
          </h2>
        </div>

        <div className="row cs_row_gap_30 cs_gap_y_30">

          {/* 🔥 Review 1 */}
          <div className="col-lg-4">
            <div className="cs_review_item cs_center_column cs_radius_20 text-center">
              <div className="cs_rating_container cs_center cs_mb_32">
                <div className="cs_rating" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>

              <p className="cs_fs_20 cs_white_color cs_mb_33">
                “Managing student data through WhatsApp is a game changer. Parents love the simplicity.”
              </p>

              <Image src="/assets/img/rating-logo-1.svg" alt="img" width={174} height={38} />
            </div>
          </div>

          {/* 🔥 Review 2 */}
          <div className="col-lg-4">
            <div className="cs_review_item cs_center_column cs_radius_20 text-center">
              <div className="cs_rating_container cs_center cs_mb_32">
                <div className="cs_rating" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>

              <p className="cs_fs_20 cs_white_color cs_mb_33">
                “The enquiry follow-up system increased our admissions. No missed leads anymore.”
              </p>

              <Image src="/assets/img/rating-logo-2.svg" alt="img" width={154} height={38} />
            </div>
          </div>

          {/* 🔥 Review 3 */}
          <div className="col-lg-4">
            <div className="cs_review_item cs_center_column cs_radius_20 text-center">
              <div className="cs_rating_container cs_center cs_mb_32">
                <div className="cs_rating" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>

              <p className="cs_fs_20 cs_white_color cs_mb_33">
                “No app needed, everything works on WhatsApp. It’s simple, fast, and very effective.”
              </p>

              <Image src="/assets/img/rating-logo-3.svg" alt="img" width={144} height={38} />
            </div>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Review1;