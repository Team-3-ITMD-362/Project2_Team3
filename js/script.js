document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const menuItems = document.querySelectorAll('.menu-item');

    // Display all items by default
    menuItems.forEach(item => item.style.display = 'block');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Apply filtering logic
            menuItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Update active class for buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
