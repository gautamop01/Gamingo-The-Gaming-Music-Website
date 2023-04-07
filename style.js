// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("name");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.innerHTML = "I'm Gautam, <br> and this website features our gaming music section where you can find a collection of gaming songs. This website serves as the music component of our main Gautam Gaming website, offering a unique and exciting addition to our gaming content."; // replace with your name
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
