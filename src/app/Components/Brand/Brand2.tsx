import Image from "next/image";

const Brand2 = () => {

  const chooseContent = [
    { img: '/assets/img/brand-11.svg' },
    { img: '/assets/img/brand-12.svg' },
    { img: '/assets/img/brand-13.svg' },
    { img: '/assets/img/brand-14.svg' },
    { img: '/assets/img/brand-15.svg' },
    { img: '/assets/img/brand-13.svg' },
  ];

  return (
    <section>
      <div className="cs_height_144 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_brands_wrapper cs_radius_10 position-relative z-1">

          {/* 🔥 Powerful Brand Statement */}
          <h2 className="cs_brand_title cs_fs_18 cs_normal cs_white_bg cs_body_color cs_radius_50">
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
            Transforming Schools with Smart ERP + WhatsApp Automation • No App Required • Instant Communication • Smarter Education with Shiksha Flow
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15} />
          </h2>

          <div className="cs_horizontal_slider_wrapper">
            <div className="cs_slider_in">

              {/* First Slider */}
              <div className="cs_brands_list">
                {chooseContent.map((item, i) => (
                  <div key={i} className="cs_center">
                    <Image src={item.img} alt="brand-img" />
                  </div>
                ))}
              </div>

              {/* Duplicate Slider for Infinite Effect */}
              <div className="cs_brands_list">
                {chooseContent.map((item, i) => (
                  <div key={i} className="cs_center">
                    <Image src={item.img} alt="brand-img" />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* 💡 Add Unique Description Section */}
          <div className="text-center mt-4 px-3">
            <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
              <strong>Shiksha Flow</strong> is not just another School ERP — it’s a complete digital transformation platform designed for modern education.
              Unlike traditional ERP systems, we eliminate the need for separate apps by integrating everything directly with <strong>WhatsApp</strong>.
            </p>

            <p style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.6" }}>
              Parents can instantly get student details like <strong>marks, homework, attendance, school calendar, government holidays</strong> and more —
              simply through WhatsApp chat powered by our intelligent chatbot.
            </p>

            <p style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.6" }}>
              We go beyond traditional ERP by offering a powerful <strong>Enquiry Management System</strong> —
              track, follow up, and convert enquiries directly via WhatsApp without missing a single lead.
            </p>

            <p style={{ fontSize: "15px", marginTop: "10px", lineHeight: "1.6" }}>
              🚀 No App Downloads • ⚡ Instant Responses • 📊 Smart Insights • 📱 WhatsApp Automation
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Brand2;