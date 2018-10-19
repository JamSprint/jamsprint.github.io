"use strict";

function carousel(container){
  const slider = container.querySelector('.list');
  const items = slider.querySelectorAll('.item');
  let index = 0;
  const nextBtn = container.querySelector('.nextBtn');
  const prevBtn = container.querySelector('.prevBtn');
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  const window = container.querySelector('.window');
  populateWindow(window, items[index]);

  function prev() {

    index--;
    if (index < 0) {
      index = items.length -1;
    }

    populateWindow(window, items[index]);
  }

  function next() {

    index++;
    if (index > items.length -1 ) {
      index = 0;
    }

    populateWindow(window, items[index]);
  }

  function populateWindow(window, item) {

    const copy = item.cloneNode(true);
    window.replaceChild(copy, window.childNodes[0]);
  }
}


var carouselOne = carousel(document.getElementById('carouselServices'));
var carouselTwo = carousel(document.getElementById('carouselTeam'));
