var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true
});

swiper.on('slideChange', function () {
    document.querySelectorAll(".Links li").forEach(li => li.classList.remove("activeLink"));
    document.querySelectorAll(".Links li")[swiper.activeIndex].classList.add("activeLink");
});

function Navigate(index) {
    document.querySelectorAll(".Links li").forEach(li => li.classList.remove("activeLink"));
    document.querySelectorAll(".Links li")[index].classList.add("activeLink");
    swiper.slideTo(index, 1000, true);
}
