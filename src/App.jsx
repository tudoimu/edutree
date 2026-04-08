import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event) => {
    if (event) event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

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
          <div className="footer-icon">
            <img
                src="https://i.ibb.co/VYBXwpch/Thi-t-k-ch-a-c-t-n-71.png"
                alt="EduTree Logo"
              />
          </div>
        </div>
        <p>© 2025 EduTree. Nền tảng hỗ trợ tạo đề và nội dung giáo dục thông minh.</p>
      </footer>

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