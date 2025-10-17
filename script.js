document.addEventListener('DOMContentLoaded', () => {
    // 페이지 로드 시 환영 메시지
    console.log('Welcome to my website!');
    
    // 프로젝트 카드에 호버 효과 추가
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});