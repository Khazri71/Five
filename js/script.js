//Implementation of Google Map

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const tunisia = { lat: 36.8279552, lng: 10.2039552 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: tunisia,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: tunisia,
      map: map,
    });
  }

//Jequery
//Smooth Scrolling

 $("#navbar a , button a").on("click" , function(event){
    if(this.hash !== ""){
        event.preventDefault();

        const hash = this.hash;

        $("html , body").animate({scrollTop : $(hash).offset().top - 74} , 700);
    }
});  

//Navbar opacity

window.addEventListener("scroll" , function(event){
    if(this.window.scrollY >330 ){
        document.getElementById("navbar").style.opacity = 0.7;
    }
    else{
        document.getElementById("navbar").style.opacity = 1;
    }
});



