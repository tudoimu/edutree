import React from 'react';

const SocialProof = () => {
  return (
    <div className="social-proof reveal active" style={{ textAlign: 'left', padding: '60px 8% 80px' }}>
      <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: '500', color: '#111', maxWidth: '1200px', margin: '0 0 40px 0', lineHeight: '1.4', letterSpacing: '-0.5px' }}>
        EduTree được huấn luyện từ giáo trình chính thức của Bộ GD&ĐT và dữ liệu đề thi, đề luyện tập mô phỏng chuẩn HSA — giúp tạo đề sát cấu trúc thực tế, dùng ngay không cần chỉnh sửa.
      </h2>
      <div id="social-metrics" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-muted)' }}>
          <span style={{ color: 'var(--primary)', fontSize: '1.2rem', marginRight: '8px' }}>✓</span> Hoàn toàn miễn phí
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-muted)' }}>
          <span style={{ color: 'var(--primary)', fontSize: '1.2rem', marginRight: '8px' }}>✓</span> Hình thức chuẩn mẫu đề HSA
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-muted)' }}>
          <span style={{ color: 'var(--primary)', fontSize: '1.2rem', marginRight: '8px' }}>✓</span> Xuất file ngay
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat-item">
          <div className="hero-stat-num">80%+</div>
          <div className="hero-stat-desc">Đề dùng được ngay <br />không cần sửa </div>
        </div>
        <div className="hero-stat-divider"></div>
        <div className="hero-stat-item">
          <div className="hero-stat-num">~5 phút</div>
          <div className="hero-stat-desc">Từ yêu cầu <br />đến có đề hoàn chỉnh </div>
        </div>
        <div className="hero-stat-divider"></div>
        <div className="hero-stat-item">
          <div className="hero-stat-num">150 câu</div>
          <div className="hero-stat-desc">Đúng cấu trúc <br />ĐGNL VNU đầy đủ </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
