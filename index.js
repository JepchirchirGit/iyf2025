document.querySelector('.newsletter form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
});

document.querySelector('Learn more').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Visit our branches for more information!');
});

document.addEventListener("DOMContentLoaded", function () {
    // Learn More button functionality
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    const moreInfo = document.getElementById("moreInfo");

    moreInfo.style.display = "none"; // Hide by default

    learnMoreBtn.addEventListener("click", function () {
        if (moreInfo.style.display === "none") {
            moreInfo.style.display = "block";
            learnMoreBtn.textContent = "Show Less";
        } else {
            moreInfo.style.display = "none";
            learnMoreBtn.textContent = "Learn More";
        }
    });

    // Search button functionality
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const searchResult = document.getElementById("searchResult");

    searchBtn.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query) {
            searchResult.textContent = `You searched for: "${query}"`;
        } else {
            searchResult.textContent = "Please enter a search term.";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("footer a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump behavior
            
            const targetId = this.getAttribute("href").substring(1); // Remove '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});