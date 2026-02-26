// Get the sidebar element
const sidebar = document.querySelector('.sidebar');

// Get the toggle button (Menu button)
const toggleBtn = document.querySelector('.toggle-btn');

// Get the close button (X button inside sidebar)
const closeBtn = document.querySelector('.close-btn');

// Get main content (for clicking outside on mobile)
const main = document.querySelector('.main');

// Function to toggle sidebar
function toggleSidebar() {
    sidebar.classList.toggle('collapsed');
}

// Add click event to toggle button
toggleBtn.addEventListener('click', toggleSidebar);

// Prevent click outside from interfering with toggle button
toggleBtn.addEventListener('click', function(e) {
    e.stopPropagation();
});

// Add click event to close button
closeBtn.addEventListener('click', toggleSidebar);

// Close sidebar when clicking outside on mobile
main.addEventListener('click', (e) => {
    // Only on mobile and when sidebar is open
    if (window.innerWidth <= 768 && !sidebar.classList.contains('collapsed')) {
        // Check if click is outside the sidebar
        if (!sidebar.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
            toggleSidebar();
        }
    }
});

// Handle window resize - set correct initial state
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        // On desktop: sidebar visible by default
        sidebar.classList.remove('collapsed');
    } else {
        // On mobile: sidebar hidden by default
        sidebar.classList.add('collapsed');
    }
});

// Set initial state based on screen size when page loads
if (window.innerWidth <= 768) {
    // Mobile: start with sidebar collapsed (hidden)
    sidebar.classList.add('collapsed');
} else {
    // Desktop: start with sidebar expanded (visible)
    sidebar.classList.remove('collapsed');
}