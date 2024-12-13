const questions = document.querySelectorAll(".question");
const pricingYearly = document.getElementById("yearly");
const pricingMonthly = document.getElementById("monthly");
const menuBar = document.querySelector('.menu-bar')
const navbar = document.querySelector(".nav-links");

menuBar.addEventListener("click", () => {
  navbar.classList.toggle("show-links");
})

questions.forEach((question, idx) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    if (question.classList.contains('active')) {
      question.querySelector("h2").innerText = "-";
    } else {
      question.querySelector("h2").innerText = "+";
    }
  });
})




// Feedback Slider
const cardsContainer = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.button.prev');
const nextButton = document.querySelector('.button.next');

let currentIndex = 2; // Start with the second card as active

function updateCards() {
  const sliderWidth = document.querySelector('.slider').offsetWidth;
  const cardWidth = cards[0].offsetWidth;
  const margin = 30; // Margin between cards set in CSS

  cards.forEach((card, index) => {
    card.classList.remove('active');
  });

  cards[currentIndex].classList.add('active');

  if (window.innerWidth <= 600) {
    const offset = -(currentIndex * (cardWidth + 1)) + (sliderWidth / 1 - cardWidth / 1);
    cardsContainer.style.transform = `translateX(${offset}px)`;
  }

  if (window.innerWidth >= 600 && window.innerWidth <= 768) {
    const offset = -(currentIndex * (cardWidth + 1)) + (sliderWidth / 1 - cardWidth / 1);
    cardsContainer.style.transform = `translateX(${offset}px)`;
  }

  if (window.innerWidth > 768) {
    const offset = -(currentIndex * (cardWidth + 2)) + (sliderWidth / 2 - cardWidth / 2) - margin;
    cardsContainer.style.transform = `translateX(${offset}px)`;
  }

}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } 
  updateCards();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCards();
    if (currentIndex === cards.length - 1) {
      currentIndex = 0;
      updateCards();
      carousel.style.transition = 'transform 0.5s ease-in-out';
    }
  }
});

window.addEventListener('resize', updateCards);