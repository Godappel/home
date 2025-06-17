// This file contains the JavaScript functionality for the project, including the logic to toggle the sidebar visibility when the button is clicked.

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('hidden');
    });

    // Optional: Close sidebar when clicking outside
    document.addEventListener('click', function (e) {
        if (!sidebar.classList.contains('hidden') &&
            !sidebar.contains(e.target) &&
            e.target !== toggleBtn) {
            sidebar.classList.add('hidden');
        }
    });
});

function updateTaskbarClock() {
    const clock = document.getElementById('taskbar-clock');
    if (!clock) return;
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    clock.textContent = h + ':' + m;
}
setInterval(updateTaskbarClock, 1000);
updateTaskbarClock();

