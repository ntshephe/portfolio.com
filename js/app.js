const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");



function firstCardShowText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn firstReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnText.style.backgroundColor = '#00ff00'
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnText.style.backgroundColor = '#F81894'
    }
}

function secondCardShowText() {
    var dots = document.getElementById("secondDots");
    var moreText = document.getElementById("secondMore");
    var btnText = document.getElementById("btn secondReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnText.style.backgroundColor = '#00ff00'
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnText.style.backgroundColor = '#F81894'

    }
}



function thirdCardShowText() {
    var dots = document.getElementById("thirdDots");
    var moreText = document.getElementById("thirdMore");
    var btnText = document.getElementById("btn thirdReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnText.style.backgroundColor = '#00ff00'
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnText.style.backgroundColor = '#F81894'

    }
}

function forthCardShowText() {
    var dots = document.getElementById("forthDots");
    var moreText = document.getElementById("forthMore");
    var btnText = document.getElementById("btn forthReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnText.style.backgroundColor = '#00ff00'
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnText.style.backgroundColor = '#F81894'

    }
}

function firthCardShowText() {
    var dots = document.getElementById("firthDots");
    var moreText = document.getElementById("firthMore");
    var btnText = document.getElementById("btn firthReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnText.style.backgroundColor = '#00ff00'
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnText.style.backgroundColor = '#F81894'

    }
}

function sixCardShowText() {
    var dots = document.getElementById("sixDots");
    var moreText = document.getElementById("sixMore");
    var btnText = document.getElementById("btn sixReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnText.style.backgroundColor = '#00ff00'
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnText.style.backgroundColor = '#F81894'

    }
}

function showSkills() {
    var dots = document.getElementById("nothing");
    var moreText = document.getElementById("moreSkills");
    var btnText = document.getElementById("btn expandSkills");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "More Skills";
        moreText.style.display = "none";
        btnText.style.backgroundColor = '#00ff00'
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide skills";
        moreText.style.display = "inline";
        btnText.style.backgroundColor = '#F81894'

    }
}

function closeMenu() {
    navbar.classList.remove("open");
}

hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
    } else {
        closeMenu();
    }
})

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filter_btns.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");

        let filterValue = btn.dataset.filter;

        $(".grid").isotope({ filter: filterValue });
    });
});

$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s',
});

window.addEventListener("scroll", () => {
    skillsEffect();
    countUp();

});

function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}

function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
    if (!checkScroll(records_wrap)) return;
    records_numbers.forEach((numb) => {
        const updateCount = () => {
            let currentNum = +numb.innerText;
            let maxNum = +numb.dataset.num;
            let speed = 6000;
            const increment = Math.ceil(maxNum / speed);

            if (currentNum < maxNum) {
                numb.innerText = currentNum + increment;
                setTimeout(updateCount, 1);
            } else {
                numb.innerText = maxNum + "+";
            }
        };

        setTimeout(updateCount, 400);
    });
}
