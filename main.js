// go to top
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// side bar ----------------
function openSideBar() {
  document.getElementById("openSideBar").style.display = "none";
  document.getElementById("mySidebar").style.width = "10em";
}

function closeSideBar() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("openSideBar").style.display = "block";
}

// slide
const test = document.getElementById("test");
let tests = [
  "./images/news/news.jpg",
  "./images/education/education.png",
  "./images/research/research2.jpg",
];
let num = 0;
function next() {
  num++;
  if (num >= tests.length) {
    num = 0;
  }
  test.src = tests[num];
}
function prev() {
  num--;
  if (num < 0) {
    num = tests.length - 1;
  }
  test.src = tests[num];
}

//
const test2 = document.getElementById("test2");
let tests2 = [
  "./images/news/news.jpg",
  "./images/education/education.png",
  "./images/research/research2.jpg",
];
let num2 = 0;
function next2() {
  num2++;
  if (num2 >= tests2.length) {
    num2 = 0;
  }
  test2.src = tests2[num2];
}
function prev2() {
  num2--;
  if (num2 < 0) {
    num2 = tests2.length - 1;
  }
  test2.src = tests2[num2];
}

const test3 = document.getElementById("test3");
const test4 = document.getElementById("test4");
const test5 = document.getElementById("test5");
let tests3 = [
  "./images/news/news.jpg",
  "./images/education/education.png",
  "./images/research/research2.jpg",
];
let num3 = 0;
function next3() {
  num3++;
  if (num3 >= tests3.length) {
    num3 = 0;
  }
  test3.src = tests3[num3];
  test4.src = tests3[num3];
  test5.src = tests3[num3];
}
function prev3() {
  num3--;
  if (num3 < 0) {
    num3 = tests2.length - 1;
  }
  test3.src = tests3[num3];
  test4.src = tests3[num3];
  test5.src = tests3[num3];
}
