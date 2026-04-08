import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials reveal active">
      <div className="testimonials-header">
        <span className="badge">GIÁO VIÊN NÓI GÌ</span>
        <h2>Được kiểm duyệt bởi giáo viên <br />HSA có kinh nghiệm thực tế </h2>
      </div>
      <div className="testimonials-grid">
        <TestimonialCard 
          quote={' "Tôi hay mất cả buổi chiều chỉ để gõ lại công thức Hóa và format file Word. Giờ tôi dành thời gian đó để thực sự phân tích bài làm của học sinh." '}
          avatar="T"
          author="Thầy Tuấn"
          info="GV Hóa — Trung tâm luyện thi HSA Hà Nội"
        />
        <TestimonialCard 
          quote={' "Điều tôi thích nhất là tính năng đổi câu tương đương. Không ưng câu nào, click 1 cái là có câu mới cùng độ khó — không mất cả đề." '}
          avatar="H"
          author="Cô Hương"
          info="GV Toán — Hệ thống OTHK"
        />
        <TestimonialCard 
          quote={' "Trước đây tôi không thể tạo bài tập riêng cho từng nhóm học sinh vì không đủ thời gian. Giờ mỗi nhóm yếu module nào, tôi giao bài đúng module đó." '}
          avatar="M"
          author="Cô Mai"
          info="GV Văn — Trung tâm luyện thi TP.HCM"
        />
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, avatar, author, info }) => (
  <div className="testimonial-card">
    <p className="testimonial-quote">{quote}</p>
    <div className="testimonial-author">
      <div className="author-avatar">{avatar}</div>
      <div className="author-info">
        <h4>{author}</h4>
        <p dangerouslySetInnerHTML={{ __html: info.replace('—', '— <br/>') }}></p>
      </div>
    </div>
  </div>
);

export default Testimonials;
