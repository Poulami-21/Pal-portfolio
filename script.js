

// Optional project scroll — safe check
let scrollPosition = 0;
const projectCards = document.getElementById('project-cards');
const prevBtn = document.getElementById('prev-project');
const nextBtn = document.getElementById('next-project');

function updateScroll() {
  if (!projectCards) return;
  const maxScroll = projectCards.children.length - 3;
  scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
  projectCards.style.transform = `translateX(-${scrollPosition * 270}px)`;
}

if (prevBtn && nextBtn) {
  nextBtn.addEventListener('click', () => {
    scrollPosition += 1;
    updateScroll();
  });

  prevBtn.addEventListener('click', () => {
    scrollPosition -= 1;
    updateScroll();
  });
}

// HERO IMAGE SLIDER
document.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.getElementById("hero-img");
  const prevHero = document.getElementById("prev-hero");
  const nextHero = document.getElementById("next-hero");

  const heroImages = [
   "Span Hero Image1-min.jpg ",
    "Span Hero Image2-min.jpg",
    "Span hero image 3-min.png",
  ];

  let currentHeroIndex = 0;
  let transitioning = false;

  function slideTo(index) {
    if (transitioning) return;
    transitioning = true;

    heroImg.style.opacity = 0;
    setTimeout(() => {
      heroImg.src = heroImages[index];
      heroImg.style.transform = "translateX(20px)";
      heroImg.offsetHeight;
      heroImg.style.transform = "translateX(0)";
      heroImg.style.opacity = 1;
      transitioning = false;
    }, 300);
  }

  if (nextHero && prevHero) {
    nextHero.addEventListener("click", () => {
      currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
      slideTo(currentHeroIndex);
    });

    prevHero.addEventListener("click", () => {
      currentHeroIndex = (currentHeroIndex - 1 + heroImages.length) % heroImages.length;
      slideTo(currentHeroIndex);
    });

    slideTo(currentHeroIndex); // Initial load
  }
});
