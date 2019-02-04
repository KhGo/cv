window.addEventListener("scroll", function() {
let deplacement  = (window.scrollY*100)/(document.body.offsetHeight-window.innerHeight);

    if (document.querySelector('#progress_bar').MaterialSlider){
        document.querySelector('#progress_bar').MaterialSlider.change(deplacement);
    }
});

