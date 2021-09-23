$(document).ready(() => {
    $(".chat-btn").click(() => {
        $(".chat-box").slideToggle("slow")
    })
})
function talk(){
    var know = {
      "Hi" : "Hello, Developers Community Here.",
      "How are you" : "Good :)",
      "What can i do for you" : "Please Give us A Subscribe.",
      "What are the Services?" : "1.Chemists,  2.Surgical Equipment Dealers,  3.Pharmaceutical Product Distributors and Manufacturers,  4.Medical Equipment Dealers, 5.Medicine Wholesalers and Distributors,  6.Surgical Face Mask Dealers,  7.N95 Face Mask Dealers,  8.Generic Medicine Distributors,  9.Pharmaceutical Product Wholesalers. Type any from 1 to 9 and press enter",
      "Bye" : "Okay! Will meet soon. TC:).." ,
      "1":"Go to contact us section and fill your details.  THANKYOU!",
      "2":"Go to contact us section and fill your details.  THANKYOU!",
      "3":"Go to contact us section and fill your details.  THANKYOU!",
      "4":"Go to contact us section and fill your details.  THANKYOU!",
      "4":"Go to contact us section and fill your details.  THANKYOU!",
      "5":"Go to contact us section and fill your details.  THANKYOU!",
      "6":"Go to contact us section and fill your details.  THANKYOU!",
      "7":"Go to contact us section and fill your details.  THANKYOU!",
       "8":"Go to contact us section and fill your details.  THANKYOU!",
       "9":"Go to contact us section and fill your details.  THANKYOU!",
    };
    var user = document.getElementById('userBox').value;
      document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
      document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
      document.getElementById('chatLog').innerHTML = "Sorry,Try something else <br>";
    }
  }