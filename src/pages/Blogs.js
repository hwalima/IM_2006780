import React from "react";
import '../CSS/blog95.css'   
import { Helmet } from "react-helmet";
function Blogs() {
  return (
    <div>
    <Helmet>
                <script>
                  `
                  
                  `
                </script>
            </Helmet>
        <div className="monitor">
        <div className="start">
          <div className="start__button">
            <div className="start__logo">
            </div>
            <p className="start__text">
              Start
            </p>
          </div>
          <div className="start__time">
            <p className="start__time-text">
            </p>
          </div>
        </div>
        <div className="start__menu-main">
          <div className="start__menu-main-side">
            <div className="start__menu-main-side-text text">
              <p className="ninefive">95</p>
              <p className="windows">Windows</p>
            </div>
          </div>
          <div className="start__menu-main-items">
            <ul className="start__menu-main-items-list1">
              <li className="start__menu-main-items-item documents">
                <img className="documents-img icon" src="https://i.ya-webdesign.com/images/windows-95-icons-png-6.png" alt="Documents" />
                <p className="start__menu-main-items-item-title documents"><span className="underline">B</span>log Eight...</p>
                <div className="start__menu-main-items-item-arrowright" />
              </li>
              <li className="start__menu-main-items-item documents">
                <img className="documents-img icon" src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Msdos-icon.png" alt="Documents" />
                <p className="start__menu-main-items-item-title documents"><span className="underline">B</span>log Seven...</p>
                <div className="start__menu-main-items-item-arrowright" />
              </li>
              <li className="start__menu-main-items-item documents">
                <img className="documents-img icon" src="https://res.cloudinary.com/penry/image/upload/v1474990254/help_book_small_ra0uhc.ico" alt="Documents" />
                <p className="start__menu-main-items-item-title documents"><span className="underline">B</span>log Six...</p>
                <div className="start__menu-main-items-item-arrowright" />
              </li>
              <li className="start__menu-main-items-item settings">
                <div className="settings-img icon bg-img" />
                <p className="start__menu-main-items-item-title settings"><span className="underline">B</span>log Five...</p>
                <div className="start__menu-main-items-item-arrowright" />
              </li>
              <li className="start__menu-main-items-item find">
                <div className="find-img icon bg-img" />
                <p className="start__menu-main-items-item-title find"><span className="underline">B</span>log Four...</p>
                <div className="start__menu-main-items-item-arrowright" />
              </li>
              <li className="start__menu-main-items-item help">
                <img className="help-img icon" src="https://res.cloudinary.com/penry/image/upload/q_100/v1474990272/pictures_bt9tfg.ico" alt="Help" />
                <p className="start__menu-main-items-item-title help"><span className="underline">B</span>log Three...</p>
              </li>
              <li className="start__menu-main-items-item run">
                <div className="run-img icon bg-img" />
                <p className="start__menu-main-items-item-title run"><span className="underline">B</span>log Two...</p>
              </li>
            </ul>
            <ul className="start__menu-main-items-list2">
              <li className="start__menu-main-items-item shutdown">
                <div className="shutdown-img icon bg-img" />
                <a href="index.html"><p className="start__menu-main-items-item-title shutdown">B<span className="underline">l</span>og One...</p></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="computer desktop-icon">
          <div className="computer__icon desktop-icon__icon">
          </div>
          <p className="computer__text desktop-icon__text">
            <a href="index.html">Home</a>
          </p>
        </div>
        <div className="recycle desktop-icon">
          <div className="recycle__icon desktop-icon__icon">
          </div>
          <p className="recycle__text desktop-icon__text">
            Blogs
          </p>
        </div>
      </div>
    </div>
  );
}
// Update the time box in the start bar every 10 seconds

function updateTime(){
  var today = new Date();
  var hours24 = today.getHours();
  var hours12;
  var minutes = today.getMinutes();
  var suffix = '';

  if (hours24 >= 12) {
    suffix = " PM";
    hours12 = hours24 % 12;
  } else {
    suffix = " AM";
    hours12 = hours24;
  }
  
  if (minutes % 10 == 0) {
    //minutes = minutes + "0";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var time = hours12 + ":" + minutes + suffix;

  var timeBox = document.querySelector(".start__time-text");

  timeBox.innerHTML = time;
}

setInterval(updateTime, 1000);

// Store the necessary objects

var startButton = document.querySelector(".start__button");

var startMenu = document.querySelector(".start__menu-main");

var body = document.querySelector("body");

let programsItem = document.querySelector(".programs");

let programsMenu = document.querySelector(".sub__programs");

// Start menu appear on click of start button and disappear on click of start button or anything else except the menu

body.onclick = function(e) {
  for (var i = 0, l = e.target.classList.length; i < l; ++i) {
    if(/start__.*/.test(e.target.classList[i])) {
        break;
    } else {
      startMenu.classList.remove("menu-open");
    }
  }
}

// Show/hide menu on click

function menuDisplay(menu) {
  if (menu.classList.contains("menu-open")) {
    menu.classList.remove("menu-open");
  } else {
    menu.classList.add("menu-open");
  }
}

startButton.addEventListener("click", function() {
  menuDisplay(startMenu);
});

programsItem.addEventListener("click", function() {
  menuDisplay(programsMenu);
});

// Make the desktop icons draggable

var desktopIcons = document.getElementsByClassName("desktop-icon");

for (let i = 0; i < desktopIcons.length; i++) {
  dragElement(desktopIcons[i]);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


export default Blogs;
