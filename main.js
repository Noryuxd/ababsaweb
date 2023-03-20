
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
    'img/7.png',
    'img/8.png',
    'img/6.png',
    'img/5.png',
    'img/3.png',
    'img/4.png',
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


function test_1(){
  let a = document.getElementById('all_1')
  a.style.display = 'block'
}

function test_1_close(){
  let a = document.getElementById('all_1')
  a.style.display = 'none'
}

function test_2(){
  let a = document.getElementById('all_2')
  a.style.display = 'block'
}

function test_2_close(){
  let a = document.getElementById('all_2')
  a.style.display = 'none'
}

function test_3(){
  let a = document.getElementById('all_3')
  a.style.display = 'block'
}

function test_3_close(){
  let a = document.getElementById('all_3')
  a.style.display = 'none'
}

function test_4(){
  let a = document.getElementById('all_4')
  a.style.display = 'block'
}

function test_4_close(){
  let a = document.getElementById('all_4')
  a.style.display = 'none'
}

function test_5(){
  let a = document.getElementById('all_5')
  a.style.display = 'block'
}

function test_5_close(){
  let a = document.getElementById('all_5')
  a.style.display = 'none'
}

function test_6(){
  let a = document.getElementById('all_6')
  a.style.display = 'block'
}

function test_6_close(){
  let a = document.getElementById('all_6')
  a.style.display = 'none'
}

function test_7(){
  let a = document.getElementById('all_7')
  a.style.display = 'block'
}

function test_7_close(){
  let a = document.getElementById('all_7')
  a.style.display = 'none'
}

function test_8(){
  let a = document.getElementById('all_8')
  a.style.display = 'block'
}

function test_8_close(){
  let a = document.getElementById('all_8')
  a.style.display = 'none'
}

function test_9(){
  let a = document.getElementById('all_9')
  a.style.display = 'block'
}

function test_9_close(){
  let a = document.getElementById('all_9')
  a.style.display = 'none'
}

function test_10(){
  let a = document.getElementById('all_10')
  a.style.display = 'block'
}

function test_10_close(){
  let a = document.getElementById('all_10')
  a.style.display = 'none'
}

function test_11(){
  let a = document.getElementById('all_11')
  a.style.display = 'block'
}

function test_11_close(){
  let a = document.getElementById('all_11')
  a.style.display = 'none'
}

function test_12(){
  let a = document.getElementById('all_12')
  a.style.display = 'block'
}

function test_12_close(){
  let a = document.getElementById('all_12')
  a.style.display = 'none'
}

function test_13(){
  let a = document.getElementById('all_13')
  a.style.display = 'block'
}

function test_13_close(){
  let a = document.getElementById('all_13')
  a.style.display = 'none'
}

function test_14(){
  let a = document.getElementById('all_14')
  a.style.display = 'block'
}

function test_14_close(){
  let a = document.getElementById('all_14')
  a.style.display = 'none'
}

function test_15(){
  let a = document.getElementById('all_15')
  a.style.display = 'block'
}

function test_15_close(){
  let a = document.getElementById('all_15')
  a.style.display = 'none'
}

function test_16(){
  let a = document.getElementById('all_16')
  a.style.display = 'block'
}

function test_16_close(){
  let a = document.getElementById('all_16')
  a.style.display = 'none'
}

function test_17(){
  let a = document.getElementById('all_17')
  a.style.display = 'block'
}

function test_17_close(){
  let a = document.getElementById('all_17')
  a.style.display = 'none'
}

function test_18(){
  let a = document.getElementById('all_18')
  a.style.display = 'block'
}

function test_18_close(){
  let a = document.getElementById('all_18')
  a.style.display = 'none'
}

function test_19(){
  let a = document.getElementById('all_19')
  a.style.display = 'block'
}

function test_19_close(){
  let a = document.getElementById('all_19')
  a.style.display = 'none'
}

function test_20(){
  let a = document.getElementById('all_20')
  a.style.display = 'block'
}

function test_20_close(){
  let a = document.getElementById('all_20')
  a.style.display = 'none'
}

function test_21(){
  let a = document.getElementById('all_21')
  a.style.display = 'block'
}

function test_21_close(){
  let a = document.getElementById('all_21')
  a.style.display = 'none'
}

function test_22(){
  let a = document.getElementById('all_22')
  a.style.display = 'block'
}

function test_22_close(){
  let a = document.getElementById('all_22')
  a.style.display = 'none'
}

function test_23(){
  let a = document.getElementById('all_23')
  a.style.display = 'block'
}

function test_23_close(){
  let a = document.getElementById('all_23')
  a.style.display = 'none'
}

function test_24(){
  let a = document.getElementById('all_24')
  a.style.display = 'block'
}

function test_24_close(){
  let a = document.getElementById('all_24')
  a.style.display = 'none'
}

function test_25(){
  let a = document.getElementById('all_25')
  a.style.display = 'block'
}

function test_25_close(){
  let a = document.getElementById('all_25')
  a.style.display = 'none'
}

function test_26(){
  let a = document.getElementById('all_26')
  a.style.display = 'block'
}

function test_26_close(){
  let a = document.getElementById('all_26')
  a.style.display = 'none'
}


function test_27(){
  let a = document.getElementById('all_27')
  a.style.display = 'block'
}

function test_27_close(){
  let a = document.getElementById('all_27')
  a.style.display = 'none'
}

function test_28(){
  let a = document.getElementById('all_28')
  a.style.display = 'block'
}

function test_28_close(){
  let a = document.getElementById('all_28')
  a.style.display = 'none'
}

function test_29(){
  let a = document.getElementById('all_29')
  a.style.display = 'block'
}

function test_29_close(){
  let a = document.getElementById('all_29')
  a.style.display = 'none'
}

function test_30(){
  let a = document.getElementById('all_30')
  a.style.display = 'block'
}

function test_30_close(){
  let a = document.getElementById('all_30')
  a.style.display = 'none'
}

function test_31(){
  let a = document.getElementById('all_31')
  a.style.display = 'block'
}

function test_31_close(){
  let a = document.getElementById('all_31')
  a.style.display = 'none'
}

function show_navbar(){
  let close_navbar = document.getElementById('navvv')
  close_navbar.style.display = 'block'
}


function close_navbar(){
  let close_navbar = document.getElementById('navvv')
  close_navbar.style.display = 'none'
}



/**FGDSSFDFSDF**/

var cart = [];

function addToCart(name,price) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].quantity++;
      showCart();
      return;
    }
  }
  cart.push({name: name, price: price, quantity: 1});
  showCart();
}

function removeFromCart(name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].quantity--;
      if (cart[i].quantity === 0) {
        cart.splice(i, 1);
      }
      showCart();
      return;
    }
  }
}

function showCart() {
  var cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemTotal = item.price * item.quantity;
    total += itemTotal;
    var li = document.createElement("li");
    li.innerHTML = item.name + "<br> Quantity :  " + item.quantity;
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("btnremove");
    removeButton.onclick = (function(itemName) {
      return function() {
        removeFromCart(itemName);
      };
    })(item.name);
    li.appendChild(removeButton);
    cartItems.appendChild(li);
  }
  var cartTotal = document.getElementById("cart-total");
  cartTotal.innerHTML = "Total: " + total + ".00 MAD" ;
  
}

function showCart2() {
  var cartItems = document.getElementById("cart-items2");
  cartItems.innerHTML = "";
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemTotal = item.price * item.quantity;
    total += itemTotal;
    var li = document.createElement("li");
    li.innerHTML = item.name + "<br> Quantity :  " + item.quantity;
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("btnremove");
    removeButton.onclick = (function(itemName) {
      return function() {
        removeFromCart(itemName);
      };
    })(item.name);
    li.appendChild(removeButton);
    cartItems.appendChild(li);
  }
  var cartTotal = document.getElementById("cart-total2");
  cartTotal.innerHTML = "Total: " + total + ".00 MAD" ;
  
}


function checkout() {
  if (cart.length === 0) {
  alert("Your cart is empty");
  return;
  }
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
  total += cart[i].price * cart[i].quantity;
  }
  sessionStorage.setItem("cartTotal", total);
  window.location.href = "checkout.html";
  console.log(cart);
  showCart();
}

var total = sessionStorage.getItem('cartTotal');
var mad = document.createElement("span");
mad.innerHTML = total + " MAD <br>";
mad.style.fontWeight = "bold";
mad.style.fontSize = "30px"
var payment = document.getElementById("payment");
payment.appendChild(mad);
payment.innerHTML += " will be cut off from your credit card";


const footer = document.querySelector('footer');
const footerPosition = footer.offsetTop;
const sidebar = document.querySelector('.sidebar');