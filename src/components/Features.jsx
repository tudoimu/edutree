import React from 'react';

const Features = () => {
  return (
    <>
      <div className="section-header reveal active" id="features-header">
        <p className="badge">Tính năng nổi bật</p>
        <h2>Mọi thứ bạn cần để tạo đề thi chuyên nghiệp</h2>
      </div>
      <section className="command-board" id="features">
        <FeatureCard 
          borderColor="#10b981" 
          icon="⚡" 
          badge="AI Core" 
          badgeBg="rgba(16, 185, 129, 0.1)" 
          badgeColor="#10b981"
          title="Tạo đề bằng Prompt"
          text={'Chỉ cần nhập yêu cầu: "Tạo đề HSA phần Tư duy định lượng, độ khó 7+", AI sẽ xử lý phần còn lại trong 30 giây.'}
        />
        <FeatureCard 
          borderColor="#3b82f6" 
          icon="🗄️" 
          badge="Database" 
          badgeBg="rgba(59, 130, 246, 0.1)" 
          badgeColor="#3b82f6"
          title="Ngân hàng câu hỏi chuẩn"
          text="Hệ thống tự động phân loại theo độ khó và chủ đề. Cập nhật theo format ĐGNL VNU mới nhất."
        />
        <FeatureCard 
          borderColor="#8b5cf6" 
          icon="📄" 
          badge="Export" 
          badgeBg="rgba(139, 92, 246, 0.1)" 
          badgeColor="#8b5cf6"
          title="Xuất file sẵn sàng sử dụng"
          text="PDF / Word được format hoàn chỉnh — không lỗi font, không cần chỉnh sửa thêm."
        />
        <FeatureCard 
          borderColor="#f59e0b" 
          icon="📈" 
          badge="Analytics" 
          badgeBg="rgba(245, 158, 11, 0.1)" 
          badgeColor="#f59e0b"
          title="Phân tích kết quả"
          text="Weakness Map từng học sinh — biết chính xác module nào yếu để dạy tập trung."
        />
        <FeatureCard 
          borderColor="#ec4899" 
          icon="⚙️" 
          badge="Custom" 
          badgeBg="rgba(236, 72, 153, 0.1)" 
          badgeColor="#ec4899"
          title="Tùy chỉnh linh hoạt"
          text="Dễ dàng thay thế, thêm bớt câu hỏi theo ý muốn với tính năng inline editing thân thiện."
        />
        <FeatureCard 
          borderColor="#14b8a6" 
          icon="💡" 
          badge="Support" 
          badgeBg="rgba(20, 184, 166, 0.1)" 
          badgeColor="#14b8a6"
          title="Hệ thống đáp án tự động"
          text="Xây dựng hệ thống hướng dẫn giải chi tiết (Step-by-Step Guidance) cho mọi bộ đề chuẩn phương pháp của Giáo viên ra đề. Học sinh có thể tự đọc hiểu."
        />
      </section>
    </>
  );
};

const FeatureCard = ({ borderColor, icon, badge, badgeBg, badgeColor, title, text }) => (
  <div className="tactical-card reveal active" style={{ borderTop: `4px solid ${borderColor}` }}>
    <div className="laser-line"></div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
      <div className="icon-box" style={{ marginBottom: '0px', width: '45px', height: '45px', fontSize: '1.2rem', background: badgeBg, color: badgeColor, borderColor: 'rgba(0,0,0,0.1)' }}> {icon}</div>
      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: badgeColor, textTransform: 'uppercase', letterSpacing: '1.5px', background: badgeBg, padding: '6px 14px', borderRadius: '20px' }}>{badge}</span>
    </div>
    <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-main)' }}>{title}</h3>
    <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>{text}</p>
  </div>
);

export default Features;
