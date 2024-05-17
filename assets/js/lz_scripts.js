$(document).ready(function(){
    $("#footer-container").load("components/footer.html");
});

$(document).ready(function(){
    $("#header-container").load("components/header.html");
});

// // Function to load content dynamically and update URL without file extension
// function loadContent() {
//     const hash = window.location.hash.substr(1);
//     const page = hash || 'index'; // Default to 'home' if no hash is present

//     fetch(page + '.html')
//         .then(response => response.text())
//         .then(html => {
//             document.getElementById('content').innerHTML = html;
//         })
//         .catch(error => console.error('Error loading the page: ', error));
// }

// // Event listener to handle hash changes
// window.addEventListener('hashchange', loadContent);

// // Initial load of content based on the hash
// loadContent();