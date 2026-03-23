
import Image from "next/image";
const Feature5 = () => {
    return (
 <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column cs_mb_47 text-center">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <Image src="/assets/img/icons/star-1.svg" alt="Star icon" />
            <span>How ShikshaFlow Works</span>
            <Image src="/assets/img/icons/star-1.svg" alt="Star icon" />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInDown">
            Get Started with Smart School ERP <br /> in 3 Simple Steps
          </h2>
        </div>

        <div className="cs_features_steps_wrapper">

          {/* STEP 1 */}
          <div className="cs_feature_step cs_center_column">
            <div className="cs_step_index cs_radius_50 cs_fs_14 cs_semibold cs_heading_color text-uppercase">
              <span>Step One</span>
            </div>
            <div className="cs_vertical_line"></div>
            <div className="cs_step_indfo_wrapper cs_radius_30 text-center position-relative">
              <h3 className="cs_fs_24 cs_semibold cs_mb_10">
                Connect Your School to WhatsApp
              </h3>
              <p className="mb-0">
                Set up ShikshaFlow with your school details and enable WhatsApp integration 
                to start managing communication and enquiries instantly.
              </p>
              <Image src="/assets/img/border-shape.png" alt="Border shape" />
            </div>
          </div>

          {/* STEP 2 */}
          <div className="cs_feature_step cs_center_column">
            <div className="cs_step_index cs_radius_50 cs_fs_14 cs_semibold cs_heading_color text-uppercase">
              <span>Step Two</span>
            </div>
            <div className="cs_vertical_line"></div>
            <div className="cs_step_indfo_wrapper cs_radius_30 text-center position-relative">
              <h3 className="cs_fs_24 cs_semibold cs_mb_10">
                Automate Enquiries & Student Updates
              </h3>
              <p className="mb-0">
                Our smart chatbot handles admission enquiries, attendance, homework, 
                marks, and notifications automatically — saving time for your staff.
              </p>
              <img src="/assets/img/border-shape.png" alt="Border shape" />
            </div>
          </div>

          {/* STEP 3 */}
          <div className="cs_feature_step cs_center_column">
            <div className="cs_step_index cs_radius_50 cs_fs_14 cs_semibold cs_heading_color text-uppercase">
              <span>Step Three</span>
            </div>
            <div className="cs_vertical_line"></div>
            <div className="cs_step_indfo_wrapper cs_radius_30 text-center position-relative">
              <h3 className="cs_fs_24 cs_semibold cs_mb_10">
                Manage Everything Without Any App
              </h3>
              <p className="mb-0">
                Parents and students receive all updates directly on WhatsApp — 
                no need to download or install any separate application.
              </p>
              <Image src="/assets/img/border-shape.png" alt="Border shape" />
            </div>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Feature5;