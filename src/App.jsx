import React, { useEffect, useState } from "react";
import "./index.css";

const SocialIcon = ({ url, img, alt }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-icon social"
      aria-label={alt}
    >
      <img src={img} alt={alt} />
    </a>
  );
};

function App() {

const [isPricingOpen, setIsPricingOpen] = useState(false);
const [billingCycle, setBillingCycle] = useState("monthly");
const [isModalOpen, setIsModalOpen] = useState(false);

const openPricing = () => setIsPricingOpen(true);
const closePricing = () => setIsPricingOpen(false);

  const openModal = (event) => {
    if (event) event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
  document.body.style.overflow = isPricingOpen ? "hidden" : "";
  return () => {
    document.body.style.overflow = "";
  };
}, [isPricingOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

const steps = [
  {
    num: 1,
    title: "Chọn môn & chuyên đề",
    desc: "Edutree hỗ trợ đầy đủ các môn thi HSA theo format ĐGNL VNU. Giao diện trực quan giúp bạn dễ dàng chọn lọc nội dung thiết yếu siêu tốc.",
    img: "https://i.ibb.co/0VDjZtp5/3.png"
  },
  {
    num: 2,
    title: "Tùy chỉnh độ khó",
    desc: "Cân đối tỷ lệ câu hỏi dễ, trung bình, khó theo chuẩn 40-40-20. Tùy ý cá nhân hóa từng câu hỏi theo ý muốn, đổi câu tương đương chỉ với 1 click.",
    img: "https://i.ibb.co/m7F6kgJ/2.png"
  },
  {
    num: 3,
    title: "Xuất file hoặc thi online",
    desc: "Tải PDF/Word hoặc gửi link cho học sinh làm bài trực tiếp – không cần app. File được thiết kế chuẩn mực sẵn sàng cho việc in ấn ngay lập tức.",
    img: "https://i.ibb.co/ym68qJjv/1.png"
  },
  {
    num: 4,
    title: "Nhận báo cáo nhanh chóng",
    desc: "AI tự động chấm điểm và phân tích lỗ hổng kiến thức từng học sinh. Vẽ biểu đồ năng lực chi tiết giúp bạn đưa ra bộ giáo trình bổ trợ phù hợp.",
    img: "https://i.ibb.co/TDD5Gx0Y/4.png"
  }
];

  return (
    <div className="app">
      <header className="top-shell">
        <div className="nav-pill">
          <div className="brand">
            <div className="brand-icon">
          <img
                src="https://i.ibb.co/VYBXwpch/Thi-t-k-ch-a-c-t-n-71.png"
                alt="EduTree Logo"
              />
            </div>
            <span>EduTree</span>
          </div>

<nav className="nav-links1">
  <a href="#features">Tính năng</a>
  <a href="#process">Quy trình</a>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      openPricing();
    }}
  >
    Xem bảng giá
  </a>
  <a href="#hall">Hall of Fame</a>
</nav>
          
          <button type="button" className="login-btn" onClick={openModal}>
            Đăng nhập
          </button>
        </div>
      </header>

      <main>
        <section className="hero reveal">
          <div className="hero-left">
            <div className="badge green-badge">✨ AI Education Assistant</div>

            <h1>
              Tạo bộ đề HSA hoàn chỉnh
            </h1>

            <div className="stat-row">
              <div className="stat-box pink-box">
                <strong>5 phút</strong>
                <span>Tạo đề</span>
              </div>

              <div className="stat-box blue-box">
                <strong>Chuẩn</strong>
                <span>Format</span>
              </div>

              <div className="stat-box green-box">
                <strong>Ảnh</strong>
                <span>Rõ nét</span>
              </div>
            </div>
          </div>

          <div className="hero-right reveal active">
  <div className="hero-card">
    <div className="hero-card-head">
      <div className="hero-card-icon">
        <img
          src="https://i.ibb.co/VYBXwpch/Thi-t-k-ch-a-c-t-n-71.png"
          alt="EduTree Logo"
        />
      </div>

      <div className="hero-card-meta">
        <h3>EduTree Generator</h3>
      </div>
    </div>

    <div className="hero-card-progress">
      <div className="hero-card-progress-top">
        <span>Tiến độ</span>
        <strong>65%</strong>
      </div>

      <div className="hero-card-progress-bar">
        <div
          className="hero-card-progress-fill"
          style={{ width: "65%" }}
        />
      </div>
    </div>

    <div className="cta-group hero-card-cta">
      <button
        className="btn-trial hero-main-btn"
        onClick={scrollToBottom}
      >
        Bắt đầu tạo đề ngay
      </button>
    </div>
  </div>
</div>
        </section>

        <section id="features" className="feature-section reveal">
          <div className="section-chip pink-chip">Tính năng nổi bật</div>
          <h2>Tại sao chọn EduTree?</h2>

          <div className="feature-grid">
            <article className="feature-card pink-card">
              <h3>Tạo đề bằng prompt</h3>
              <p>Chỉ cần nhập yêu cầu: "Tạo đề HSA phần Tư duy định lượng, độ khó 7+", AI sẽ xử lý phần còn lại trong 30 giây.</p>
            </article>

            <article className="feature-card blue-card">
              <h3>Ngân hàng câu hỏi chuẩn</h3>
              <p>Hệ thống tự động phân loại theo độ khó và chủ đề. Cập nhật theo format ĐGNL VNU mới nhất.</p>
            </article>

            <article className="feature-card green-card">
              <h3>Xuất file sẵn sàng sử dụng</h3>
              <p>PDF / Word được format hoàn chỉnh – không lỗi font, không cần chỉnh sửa thêm.</p>
            </article>

            <article className="feature-card yellow-card">
              <h3>Phân tích kết quả</h3>
              <p>Weakness Map từng học sinh – biết chính xác module nào yếu để dạy tập trung.</p>
            </article>
          </div>
        </section>

<section id="process" className="process-section">
  <div className="section-chip pink-chip">Quy trình sử dụng</div>
  <h2>Tạo đề cùng EduTree chỉ với 4 bước</h2>

  <div className="process-list">
    {steps.map((step) => (
      <article className="process-card" key={step.num}>
        <div className="process-text">
          <div className="process-number">0{step.num}</div>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>

        <div className="process-image">
          <img src={step.img} alt={step.title} />
        </div>

      </article>
    ))}
  </div>
</section>

        <section id="hall" className="hall-section reveal">
          <div className="section-chip pink-chip">🏆 Thành tích nổi bật</div>
          <h2>Thủ khoa kỳ thi tốt nghiệp THPT Quốc gia 2022</h2>

          <div className="score-card">
            <div className="founder-pill">👑 Phạm Văn Linh</div>

            <div className="score-main">56,85/60</div>

            <div className="score-split">
              <div>
                <span>Nhà sáng lập và phát triển AI của EduTree</span>
              </div>
            </div>

            <p>Sẵn sàng đồng hành cùng bạn trong việc tạo nội dung học tập chất lượng hơn.</p>
          </div>
        </section>

        <section id="join" className="cta-section reveal">
          <div className="cta-box">
            <h2>Sẵn sàng tạo đề cùng EduTree?</h2>
            <p>Đăng ký miễn phí và bắt đầu tạo nội dung học tập ngay hôm nay</p>
            <button type="button" className="google-btn" onClick={openModal}>
              Đăng nhập với Google
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="footer-icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
  <img
    src="https://i.ibb.co/VYBXwpch/Thi-t-k-ch-a-c-t-n-71.png"
    alt="EduTree Logo"
  />
</div>

          <SocialIcon
            url="https://www.facebook.com/edutree.vn/"
            img="https://i.ibb.co/ymJ2yrHb/icons8-facebook-480.png"
            alt="Facebook"
          />

          <SocialIcon
            url="https://zalo.me/g/awyel4hvqawcibsiuwup"
            img="https://i.ibb.co/rKt6Vj13/zalo-seeklogo.png"
            alt="Zalo"
          />
        </div>
        <p>© 2026 EduTree. Nền tảng hỗ trợ tạo đề và nội dung giáo dục thông minh.</p>
      </footer>

{isPricingOpen ? (
  <div
    className="pricing-modal-overlay"
    onClick={closePricing}
  >
    <div
      className="pricing-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="pricing-close" onClick={closePricing}>
        ×
      </button>

      <h2 className="pricing-title">
        Đầu tư cho chất lượng giảng dạy
      </h2>

      {/* Toggle */}
      <div className="pricing-toggle">
        <button
          className={billingCycle === "monthly" ? "active" : ""}
          onClick={() => setBillingCycle("monthly")}
        >
          Hàng tháng
        </button>
        <button
          className={billingCycle === "yearly" ? "active" : ""}
          onClick={() => setBillingCycle("yearly")}
        >
          Hàng năm
        </button>
      </div>

      <div className="pricing-grid">

        {/* FREE */}
        <div className="pricing-card">
          <h3>FREE</h3>
          <div className="pricing-price">0đ</div>
          <div className="pricing-sub">Miễn phí</div>

          <ul>
            <li>40 lá/ngày (5 câu)</li>
            <li>Nhận miễn phí 200 lá (50 câu = 1 phần đề HSA)</li>
            <li>Trải nghiệm cảm giác làm đề HSA chỉ trong 30s</li>
            <li>Tải đề về dạng PDF</li>
            <li>Tạo dạng bài tập nhỏ</li>
          </ul>

          <button className="pricing-btn-muted">
            Bắt đầu miễn phí
          </button>
        </div>

        {/* PLUS */}
        <div className="pricing-card pricing-card-featured">
          <h3>PLUS</h3>

          <div className="pricing-price">
            {billingCycle === "monthly"
              ? "99.000đ"
              : "99.000đ"}
            <span>
              {billingCycle === "monthly"
                ? "/tháng đầu sử dụng"
                : "/tháng"}
            </span>
          </div>

          <div className="pricing-sub pricing-sub-success">
            {billingCycle === "monthly"
              ? "Từ tháng sau 129.000đ/tháng"
              : "Thanh toán theo năm"}
          </div>

          <ul>
            <li>Nhận ngay 1200 lá mỗi tháng</li>
            <li>40 lá làm mới mỗi ngày</li>
            <li>Tải đề bằng PDF và Word</li>
            <li>Thống kê hành vi học tập học sinh</li>
            <li>Xuất báo cáo bảng điểm</li>
            <li>Thông báo tự động cho phụ huynh</li>
            <li>Tạo bài tập nhỏ</li>
          </ul>

          <button className="pricing-btn">
            Mua gói Plus ngay
          </button>
        </div>

        {/* PRO */}
        <div className="pricing-card">
          <h3>PRO</h3>

          <div className="pricing-price">
            {billingCycle === "monthly"
              ? "599.000đ"
              : "499.000đ"}
            <span>/tháng</span>
          </div>

          <div className="pricing-sub">
            Thanh toán theo năm
          </div>

          <ul>
            <li>Nhận ngay 5000 lá mỗi tháng</li>
            <li>100 lá làm mới mỗi ngày</li>
            <li>Tải đề bằng PDF và Word</li>
            <li>Thống kê hành vi học tập học sinh</li>
            <li>Xuất báo cáo bảng điểm</li>
            <li>Thông báo tự động cho phụ huynh</li>
            <li>Tạo bài tập nhỏ</li>
            <li>Hệ thống Teamwork</li>
          </ul>

          <button className="pricing-btn-outline">
            Mua gói Pro ngay
          </button>
        </div>

      </div>

      <div className="pricing-note">
        <p><strong>Giải pháp thiết thực nhất để tối ưu thời gian giảng dạy</strong></p>
        <p>Tiết kiệm hàng chục tiếng mỗi tuần · Tập trung vào chuyên môn cốt lõi</p>
      </div>

    </div>
  </div>
) : null}

      {isModalOpen ? (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <h3>Cảm ơn bạn!</h3>
            <p>EduTree đã nhận được yêu cầu của bạn và sẽ liên hệ sớm nhất.</p>
            <button type="button" onClick={closeModal}>
              Đóng
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;