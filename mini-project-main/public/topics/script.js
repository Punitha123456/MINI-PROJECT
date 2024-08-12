// scripts.js for page navigation

document.addEventListener("DOMContentLoaded", function() {
    const introLink = document.getElementById("intro-link");
    const videoLink = document.getElementById("video-link");
    
    
    
    const introSection = document.getElementById("intro");
    const videoSection = document.getElementById("video");
       
    
    // Function to show a section and hide others
    function showSection(section) {
        introSection.classList.remove("active");
        videoSection.classList.remove("active");
        
        
        
        section.classList.add("active");
    }

    // Event listeners for navigation links
    introLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSection(introSection);
    });

    videoLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSection(videoSection);
    });
    

    
    // Initially show the home section
    showSection(introSection);
});










