const counters = document.querySelectorAll("[data-count]");

const animateCounter = (entry) => {
  const node = entry.target;
  const target = Number(node.dataset.count);
  const start = performance.now();
  const duration = 950;

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = Math.round(target * eased);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    animateCounter(entry);
    obs.unobserve(entry.target);
  });
}, { threshold: 0.4 });

counters.forEach((counter) => observer.observe(counter));

const revealTargets = document.querySelectorAll(
  ".motion-block, .proof article, .work-card, .posts article, .project-row, .project-feature, .case-tile, .case-study article, .case-meta, .image-slot, .resume-card"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, { threshold: 0.16 });

revealTargets.forEach((target, index) => {
  target.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
  revealObserver.observe(target);
});

document.querySelectorAll(".skill-card, .case-tile, .work-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${y * -4}deg) rotateY(${x * 5}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});
