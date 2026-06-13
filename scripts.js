const showPopupBtn = document.getElementById("show-popup");
const popupOverlay = document.getElementById("popup-overlay");
const popupClose = document.querySelector(".popup-close");
const popupForm = document.getElementById("popup-form");

showPopupBtn.addEventListener("click", () => {
    popupOverlay.classList.add("show");
});

popupClose.addEventListener("click", () => {
    popupOverlay.classList.remove("show");
});

popupOverlay.addEventListener("click", (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.classList.remove("show");
    }
});

popupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Сообщение отправлено");

    popupOverlay.classList.remove("show");
    popupForm.reset();
});

const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const isOpen = header.classList.contains("active");


        headers.forEach((h) => {
            h.classList.remove("active");
            const c = h.nextElementSibling;
            c.style.maxHeight = null;
        });

        if (!isOpen) {
            header.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        tabButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });

        button.classList.add("active");

        const tabId = button.getAttribute("data-tab");
        const targetContent = document.getElementById(tabId);
        targetContent.classList.add("active");
    });
});

const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach((tooltip) => {
    const text = tooltip.querySelector(".tooltip-text");

    tooltip.addEventListener("mouseenter", () => {
        text.style.visibility = "visible";
        text.style.opacity = "1";
    });

    tooltip.addEventListener("mouseleave", () => {
        text.style.visibility = "hidden";
        text.style.opacity = "0";
    });
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".slider-arrow-left");
const rightArrow = document.querySelector(".slider-arrow-right");
const dots = document.querySelectorAll(".slider-dot");

let currentSlide = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");

    if (currentSlide === 0) {
        leftArrow.classList.add("disabled");
    } else {
        leftArrow.classList.remove("disabled");
    }

    if (currentSlide === slides.length - 1) {
        rightArrow.classList.add("disabled");
    } else {
        rightArrow.classList.remove("disabled");
    }
}

rightArrow.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
    }
});

leftArrow.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
    });
});

updateSlider();