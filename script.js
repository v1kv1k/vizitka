// Ініціалізація AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Прогрес-бар прокрутки
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
}); 

// Паралакс ефект для карток при русі миші
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card, .skill-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.transform = `
            perspective(1000px)
            rotateY(${(x - rect.width/2)/20}deg)
            rotateX(${-(y - rect.height/2)/20}deg)
        `;
    });
});

// Повернення картки до початкового положення
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.card, .skill-card');
    cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    });
});

// Анімація появи тегів
document.querySelectorAll('.tag').forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
}); 

// Переключатель темы
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (root.getAttribute('data-theme') === 'dark') {
        root.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        root.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// Загружаем сохраненную тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
} else {
    themeToggle.textContent = '🌙';
} 