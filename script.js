// Wrap every letter in a span
var textWrapper = document.getElementsByClassName('convertSpan');
var i;
for (i = 0; i < textWrapper.length; i++) {
  textWrapper[i].innerHTML = textWrapper[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}
var x;
function animateVerse() {
  x.style.display = "block";
  anime.timeline({loop: true})
  .add({
    targets: '.convertSpan .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 5000,
    delay: (el, i) => 500 + 30 * i })
  // .add({
  //   targets: '.ml12 .letter',
  //   translateX: [0,-30],
  //   opacity: [1,0],
  //   easing: "easeInExpo",
  //   duration: 1100,
  //   delay: (el, i) => 100 + 30 * i
  // });
}

function view() {
  x = document.getElementById("v1");
  animateVerse();
}

function view1() {
  document.getElementById("v1").style.display = "none";
  x = document.getElementById("v2");
  animateVerse();
}

function view2() {
  document.getElementById("v2").style.display = "none";
  x = document.getElementById("v3");
  animateVerse();
}

function view3() {
  document.getElementById("v3").style.display = "none";
  x = document.getElementById("v4");
  animateVerse();
}

function view4() {
  document.getElementById("v4").style.display = "none";
  x = document.getElementById("v5");
  animateVerse();
}

function view5() {
  document.getElementById("v5").style.display = "none";
  x = document.getElementById("v6");
  animateVerse();
}

function view6() {
  document.getElementById("v6").style.display = "none";
  x = document.getElementById("v7");
  animateVerse();
}

function view7() {
  document.getElementById("v7").style.display = "none";
  x = document.getElementById("v8");
  animateVerse();
}

function view8() {
  document.getElementById("v8").style.display = "none";
  x = document.getElementById("v9");
  animateVerse();
}
function view9() {
  document.getElementById("v9").style.display = "none";
  // x = document.getElementById("v2");
  // animateVerse();
}