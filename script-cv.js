window.addEventListener("scroll", function() {
let deplacement  = (window.scrollY*100)/(document.body.offsetHeight-window.innerHeight);

    if (document.querySelector('#progress_bar').MaterialSlider){
        document.querySelector('#progress_bar').MaterialSlider.change(deplacement);
    }
    
function myScroll() { 
    var progress = document.getElementById('progress_bar').value;
    
   let value =  progress;
    
    // Calculez ici la valeur de déplacement à efectuer lors du scroll
    
    window.scroll(0, value) // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
}
});




