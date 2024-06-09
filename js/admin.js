function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function toggleSidebar() {
    const container = document.querySelector('.container');
    container.classList.toggle('sidebar-collapsed');
}

// Initial active section
document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
});
