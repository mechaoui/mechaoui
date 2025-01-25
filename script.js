function showSection(sectionId) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // إظهار القسم المحدد
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}

// إظهار قسم "الفيديوهات" بشكل افتراضي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    showSection('videos');
});
