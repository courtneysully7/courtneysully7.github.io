document.addEventListener("DOMContentLoaded", function () {

  const reviewsData = [
    {
      title: "The Midnight Library",
      rating: "⭐⭐⭐⭐⭐",
      fullReview: "A deeply introspective novel about the infinite possibilities of life. It blends melancholy and hope into something quietly magical."
    },
    {
      title: "The Silent Patient",
      rating: "⭐⭐⭐⭐",
      fullReview: "A chilling psychological thriller that slowly tightens its grip. Smart pacing and a satisfying twist."
    }
  ];

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalRating = document.getElementById("modal-rating");
  const modalReview = document.getElementById("modal-review");
  const closeBtn = document.querySelector(".close");

  // Navigation
  document.getElementById("nav-reviews").addEventListener("click", function () {
    switchSection("reviews");
  });

  document.getElementById("nav-about").addEventListener("click", function () {
    switchSection("about");
  });

  function switchSection(id) {
    document.querySelectorAll("main section").forEach(section => {
      section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  }

  // Review card clicks
  document.querySelectorAll(".review-card").forEach(card => {
    card.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      openModal(index);
    });
  });

  function openModal(index) {
    modalTitle.textContent = reviewsData[index].title;
    modalRating.textContent = reviewsData[index].rating;
    modalReview.textContent = reviewsData[index].fullReview;
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  closeBtn.addEventListener("click", closeModal);

  // Click outside modal to close
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

});