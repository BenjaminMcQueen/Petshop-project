function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar')
    const content = document.querySelector('.main')
    const banner = document.querySelector('.banner')
    sidebar.classList.toggle('open')
    content.classList.toggle('open-main')
    banner.classList.toggle('open-main')
}