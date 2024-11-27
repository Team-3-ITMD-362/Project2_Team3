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

    // Reset button logic
    const resetButton = document.querySelector('.reset-button'); // Adjust selector as necessary
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            // Show all items
            menuItems.forEach(item => item.style.display = 'block');

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
        });
    }

    // Prevent form submission and handle custom logic
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            console.log("Form submission prevented!");
            
            const email = document.getElementById('myform_email').value;
            const phone = document.getElementById('myform_phone').value;
            console.log(`Email: ${email}, Phone: ${phone}`);
            
            // Optional feedback to user
            alert("Thank you for signing up for Promotions!");

            // Reset the email and phone fields after submission
            document.getElementById('myform_email').value = '';
            document.getElementById('myform_phone').value = '';
        });
    }
});