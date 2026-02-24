const reviews = [
  {
    title: "The Midnight Library",
    rating: "⭐⭐⭐⭐⭐",
    fullReview: "This novel beautifully explores regret and possibility. The emotional depth and philosophical undertones make it both comforting and thought-provoking. A must-read for anyone questioning their life choices."
  },
  {
    title: "The Silent Patient",
    rating: "⭐⭐⭐⭐",
    fullReview: "A tense psychological thriller that slowly builds toward a shocking reveal. The pacing keeps you engaged and the atmosphere is deliciously unsettling."
  }
];

function openModal(index) {
  document.getElementById("modal-title").innerText = reviews[index].title;
  document.getElementById("modal-rating").innerText = reviews[index].rating;
  document.getElementById("modal-review").innerText = reviews[index].fullReview;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function outsideClick(event) {
  if (event.target.id === "modal") {
    closeModal();
  }
}

function showSection(sectionId) {
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}