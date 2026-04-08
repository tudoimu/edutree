import React from 'react';

const Expertise = () => {
  return (
    <section className="expert-section reveal active" style={{ padding: '100px 8%', background: '#F8FAFC' }}>
      <div className="expert-container">
        <div className="expert-image">
          <div style={{ position: 'absolute', top: '-15px', left: '-15px', right: '15px', bottom: '15px', border: '2px solid var(--primary)', borderRadius: '30px', zIndex: 1 }}></div>
          <img src="https://i.ibb.co/TD1yJ9LK/Linh.jpg" alt="Phạm Văn Linh" style={{ width: '100%', height: 'auto', borderRadius: '30px', position: 'relative', zIndex: 2, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.2)', objectFit: 'cover', aspectRatio: '4/5' }} />
          <div className="badge-expert" style={{ position: 'absolute', bottom: '30px', right: '-25px', background: 'var(--primary)', color: 'white', padding: '15px 25px', borderRadius: '20px', zIndex: 3, fontWeight: '800', boxShadow: '0 10px 20px rgba(34, 197, 94, 0.3)' }}> Thủ khoa Toàn quốc </div>
        </div>
        <div className="expert-content">
          <span className="badge" style={{ background: 'rgba(34, 197, 94, 0.1)', color: 'var(--primary)', padding: '8px 18px', borderRadius: '20px', fontWeight: '700', fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>Người sáng lập & Phát triển</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.7rem)', lineHeight: '1.3', marginBottom: '25px', color: 'var(--text-main)' }}>
            Phương pháp tạo đề từ trí tuệ nhân tạo được phát triển bởi <span style={{ color: 'var(--primary)' }}>Thủ khoa Phạm Văn Linh</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '30px' }}>
            Được đúc kết từ hàng ngàn giờ nghiên cứu và kinh nghiệm thực chiến, hệ thống thuật toán của Edutree mang đậm triết lý học tập của Thủ khoa điểm thi THPT. Mỗi đề thi được AI tạo ra không chỉ chuẩn format cấu trúc mà còn tối ưu hóa lộ trình tư duy, giúp học sinh nắm bắt phương pháp giải quyết tối ưu.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ background: '#F8FAFC', padding: '15px 25px', borderRadius: '15px', borderLeft: '4px solid var(--primary)' }}>
              <div style={{ fontWeight: '800', fontSize: '1.5rem', color: 'var(--text-main)' }}>#1</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>Phương pháp học tối ưu</div>
            </div>
            <div style={{ background: '#F8FAFC', padding: '15px 25px', borderRadius: '15px', borderLeft: '4px solid var(--primary)' }}>
              <div style={{ fontWeight: '800', fontSize: '1.5rem', color: 'var(--text-main)' }}>10.000+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>Câu hỏi chất lượng cao</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
