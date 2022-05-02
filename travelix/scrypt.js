
window.addEventListener("scroll", function(){
    var nav=this.document.getElementById("botnavbar");
    if(window.scrollY==0){
        nav.style.top="40px";
        nav.style.height="185px";
    }else{
        nav.style.top="0";
        nav.style.height="57px";
    }
    

    
    // animation: scrolling 2s;
})