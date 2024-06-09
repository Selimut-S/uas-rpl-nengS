const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide')
})

        // Function to load the content based on the hash in the URL
        function loadContent() {
            const hash = window.location.hash.substring(1); // Remove the '#' from the hash
            let contentUrl = '';

            // Map hash to the corresponding HTML file in the 'page' folder
            switch (hash) {
                case 'page1':
                    contentUrl = 'form/admin.html';
                    break;
                case 'page2':
                    contentUrl = 'form/admin.html';
                    break;
                default:
                    contentUrl = 'index.html'; // Default content if no hash or unknown hash
            }

            // Fetch and display the content
            fetch(contentUrl)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading page:', error);
                    document.getElementById('content').innerHTML = 'Error loading page.';
                });
        }

        // Listen to hash changes and load the content accordingly
        window.addEventListener('hashchange', loadContent);
        // Load content on initial page load
        window.addEventListener('load', loadContent);