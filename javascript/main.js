const slideImages = Array.from(document.querySelectorAll(".slider-container img"));
const slidesLength = slideImages.length;
const slideNumber = document.querySelector(".slide-number span");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentSlide = 1;

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", previous);

let pagination = document.createElement("ul");
pagination.setAttribute("id", "pagination");

for (let i = 1; i <= slidesLength; i++) {
    let item = document.createElement("li");
    item.setAttribute("data-index", i);
    item.appendChild(document.createTextNode(i));
    pagination.appendChild(item);
}

document.querySelector(".slider-indicator").appendChild(pagination);

let bullets = document.querySelectorAll("#pagination li");
for(let i = 0; i < bullets.length; i++) {
    bullets[i].onclick = function() {
        currentSlide = parseInt( this.getAttribute("data-index"));
        checker();
    }
}
function next() {
    if (currentSlide >= slidesLength) {
        return false;
    } else {
        currentSlide++;
        checker();
    }
}

function previous() {
    if (currentSlide <= 1) {
        return false;
    } else {
    currentSlide--;
    checker();
    }
}

function checker() {
    slideNumber.textContent = `${currentSlide} of ${slidesLength}`;
    removeActives();
    slideImages[currentSlide - 1].classList.add("active");
    bullets[currentSlide - 1].classList.add("active");
}

function removeActives() {
    slideImages.forEach((img) => {
    img.classList.remove("active");
});
    bullets.forEach((bullet) => {
    bullet.classList.remove("active");
});

  // Check if current slide is the first or last to disable navigation buttons
    if (currentSlide === 1) {
    prevBtn.classList.add("disabled");
    } else {
    prevBtn.classList.remove("disabled");
}

    if (currentSlide === slidesLength) {
    nextBtn.classList.add("disabled");
    } else {
    nextBtn.classList.remove("disabled");
    }
}

// Initial setup
checker();
