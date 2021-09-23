var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function talk(){
    var know = {
      "Hi" : "Hello, Developers Community Here.",
      "How are you" : "Good :)",
      "What can i do for you" : "Please Give us A Subscribe.",
      "ok" : "Thank You So Much <3",
      "Bye" : "Okay! Will meet soon. TC:).."
    };
    var user = document.getElementById('userBox').value;
      document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
      document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
      document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
  }
