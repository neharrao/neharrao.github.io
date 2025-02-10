const scrollToTopBtn = document.getElementById("scrollToTopBtn");


window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


function scrollToTop() {
    
    window.scroll({ top: 0, behavior: 'smooth' });
}