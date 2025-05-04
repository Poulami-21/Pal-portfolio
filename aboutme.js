document.addEventListener("DOMContentLoaded", () => {
  if (typeof ScrollReveal === "undefined") {
    console.error("ScrollReveal is not loaded.");
    return;
  }

  const sr = ScrollReveal({  // ✅ no need to use new — it's a factory function
    distance: "60px",
    duration: 1500,
    delay: 200,
    reset: true,
  });

  sr.reveal(".about-content", { origin: "left" });
  sr.reveal(".about-skills", { origin: "right" });
  sr.reveal(".about-softskills", { origin: "bottom" });
});
