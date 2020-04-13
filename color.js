var colors = generatecolor(6);
var pickedcolor = pickcolor();
var colordisplay = document.querySelector('#ghanta');
var square = document.querySelectorAll('.square');
var message = document.querySelector('#message')
var h1 = document.querySelector('h1');
colordisplay.textContent = pickedcolor;
for (var i = 0; i < square.length; i++) {

  square[i].style.backgroundColor = colors[i];
  square[i].addEventListener("click", function() {
    var clickedcolor = this.style.backgroundColor;
    console.log(clickedcolor);
    if (clickedcolor === pickedcolor) {
      message.textContent = "Correct";
      changecolor(clickedcolor);
      h1.style.backgroundColor = clickedcolor;

    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
    }

  })
}

function changecolor(color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }

}

function pickcolor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generatecolor(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(rcolor());

  }

  return arr;
}

function rcolor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";

}
