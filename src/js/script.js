function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('open');
    overlay.classList.toggle('open');
}
