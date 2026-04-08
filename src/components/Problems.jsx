import React, { useEffect, useRef } from 'react';

const Problems = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.tactical-card');
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    };
    
    const handleMouseLeave = (card) => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);

  return (
    <>
      <div className="section-header reveal active">
        <p className="badge">Vấn đề</p>
        <h2 style={{ maxWidth: '1000px', margin: '0 auto' }}>
          Đừng để bị xao nhãng bởi các công việc lặp đi lặp lại. <br />Hãy dành thời gian và chất xám để tối ưu phương pháp dạy học.
        </h2>
      </div>
      <section className="command-board" id="problem-board" ref={containerRef}>
        <ProblemCard icon="⏳" title="Mất hàng giờ cho những việc lặp lại" text="Gõ công thức, căn chỉnh Word, chia section, thêm đáp án, viết lời giải… Các bước bắt buộc nhưng không thể làm nhanh." />
        <ProblemCard icon="❌" title="Tạo câu hỏi đã khó — chuẩn format còn khó hơn" text="HSA yêu cầu đúng cấu trúc và dạng câu hỏi. Viết được câu hỏi chỉ là bước đầu — làm đúng format mới là phần tốn thời gian." />
        <ProblemCard icon="📉" title="Không đảm bảo đề luôn chuẩn HSA" text={<>Soạn thủ công dễ gặp lỗi: <br /> - Sai cấu trúc đề <br /> - Lệch độ khó <br /> - Không đồng đều giữa các câu </>} />
        <ProblemCard icon="👥" title="Khó sát sao học sinh" text="Lớp đông sẽ khó thể nắm rõ được tình hình học tập chi tiết của từng học sinh." />
        <ProblemCard icon="🔄" title="Điều chỉnh hình thức đề thủ công khó khăn" text="Tráo đổi câu trong đề truyền thống làm thủ công bất tiện, khó tùy chỉnh định dạng trong Word." />
        <ProblemCard icon="💬" title="Quá tải giải đáp ngoài giờ" text="Vừa quá tải vì soạn lời giải chi tiết thủ công, vừa tiêu tốn quỹ thời gian cá nhân để giải đáp lặp đi lặp lại một nội dung cho nhiều học sinh ngoài giờ dạy." />
      </section>
    </>
  );
};

const ProblemCard = ({ icon, title, text }) => (
  <div className="tactical-card reveal active">
    <div className="laser-line"></div>
    <div className="icon-box">{icon}</div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-main)' }}>{title}</h3>
    <p>{text}</p>
  </div>
);

export default Problems;
