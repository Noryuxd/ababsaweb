
const SLIDER = document.querySelector(".slider")

function calc_translation(){
    let matrex = window.getComputedStyle(SLIDER).getPropertyValue("transform");
    let matrexArr = matrex.split(", ");
    let translateXNum = parseInt(matrexArr[4]);
    return translateXNum
}

function to_left(){
    let translateXNum = calc_translation()
    let newTranslateValue = null
    if(translateXNum % 1200 == 0){
        if(translateXNum >= 0){
            newTranslateValue = -1200
        }else{
            newTranslateValue = translateXNum + 1200
        }
    }    
    SLIDER.style.transform = `translateX(${newTranslateValue}px)`
}

function to_right(){
    let translateXNum = calc_translation()
    let newTranslateValue = null
    if(translateXNum % 1200 == 0){
        if(translateXNum <= -1200){
            newTranslateValue = 0
        }else{
            newTranslateValue = translateXNum - 1200
        }
    }
    SLIDER.style.transform = `translateX(${newTranslateValue}px)`
}

AOS.init();

function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}
$(document).ready(function() {
    $(".click").click(function() {
        $(".click").removeClass("active");
        $(this).addClass("active");
    })

})

$(document).ready(function() {
    var images = [
      'img/2.png',
      'img/3.png',
      'img/5.png',
      'img/6.png',
      'img/7.png',
      'img/1.png',
    ];
    var index = 0;
    setInterval(function() {
      $('#my-image img').fadeOut('slow', function() {
        $(this).attr('src', images[index]).fadeIn('slow');
        index = (index + 1) % images.length;
      });
    }, 5000);

    var images2 = [
        'img/Galaxy S23  S23+.png',
        'img/For the pros (8).png',       
        'img/For the pros (9).png',
        'img/For the pros (1).png',
        'img/For the pros (6).png',
        
      ];
      var index = 0;
      setInterval(function() {
        $('#my-image2 img').fadeOut('slow', function() {
          $(this).attr('src', images2[index]).fadeIn('slow');
          index = (index + 1) % images2.length;
        });
      }, 5000);
  });