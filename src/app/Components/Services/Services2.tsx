import Image from "next/image";
import Link from "next/link";

const Services2 = () => {

  const teamContent = [
    {
      img: '/assets/img/services-icon1.svg',
      title: 'WhatsApp ERP Automation',
      content: 'Manage your entire school operations directly through WhatsApp. Parents receive instant replies for student details like marks, attendance, and homework without installing any app.'
    },
    {
      img: '/assets/img/services-icon2.svg',
      title: 'Smart Enquiry Management',
      content: 'Capture, track, and convert student enquiries effortlessly. Our system ensures every enquiry is followed up through WhatsApp, helping schools increase admissions.'
    },
    {
      img: '/assets/img/services-icon3.svg',
      title: 'Student Performance Tracking',
      content: 'Monitor student marks, progress, and performance in real-time. Parents can instantly check academic updates through chatbot-enabled WhatsApp communication.'
    },
    {
      img: '/assets/img/services-icon4.svg',
      title: 'Homework & Attendance Updates',
      content: 'Automatically send homework, attendance, and daily updates to parents via WhatsApp, ensuring transparency and better engagement with zero manual effort.'
    },
    {
      img: '/assets/img/services-icon5.svg',
      title: 'School Calendar & Notifications',
      content: 'Share school events, exam schedules, and government holidays instantly. Keep parents informed and connected with automated real-time notifications.'
    },
    {
      img: '/assets/img/services-icon6.svg',
      title: 'No App • 100% Accessibility',
      content: 'Unlike traditional ERP systems, Shiksha Flow works completely on WhatsApp. No downloads, no learning curve — just simple, fast, and accessible communication.'
    },
  ];

  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        
        {/* 🔥 Section Heading */}
        <div className="cs_section_heading cs_style_1 cs_center_column cs_mb_47 text-center position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
            <span>Our Services</span>
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
          </div>

          <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInUp">
            Smart School ERP Powered by WhatsApp
          </h2>

          <p className="mb-0">
            Shiksha Flow redefines traditional school ERP systems by combining automation, communication, and intelligence — all inside WhatsApp. <br />
            No apps, no complexity — just seamless school management.
          </p>
        </div>

        {/* 🔥 Services Cards */}
        <div className="row cs_row_gap_30 cs_gap_y_30 position-relative z-2">

          {teamContent.map((item, i) => (
            <div key={i} className="col-xl-4 col-md-6">
              <div className="cs_iconbox cs_style_4 cs_radius_15 position-relative overflow-hidden">
                
                <div className="cs_iconbox_content cs_radius_15 position-relative">
                  
                  <div className="cs_iconbox_header cs_mb_17">
                    <span className="cs_iconbox_icon cs_heading_color">
                      <Image src={item.img} alt="img" width={60} height={60} />
                    </span>

                    <h3 className="cs_iconbox_title cs_fs_24 cs_semibold mb-0">
                      <Link href="/service/service-details" aria-label="Service details page link">
                        {item.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="cs_iconbox_info">
                    <p className="cs_mb_25">{item.content}</p>

                    <Link
                      href="/service/service-details"
                      aria-label="Service details page link"
                      className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_heading_color text-uppercase"
                    >
                      <span>READ MORE</span>
                      <span className="cs_btn_icon">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </div>

                </div>

                <div className="cs_service_shape position-absolute">
                  <Image src="/assets/img/service-shape-2.svg" alt="img" width={323} height={218} />
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Background Shape */}
        <div className="cs_service_shape_1 position-absolute start-0 bottom-0">
          <Image src="/assets/img/service-shape-1.svg" alt="img" width={1905} height={1445} />
        </div>

      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Services2;