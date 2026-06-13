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
        text.style.display = "block";
    });

    tooltip.addEventListener("mouseleave", () => {
        text.style.display = "none";
    });
});