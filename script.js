document.addEventListener("DOMContentLoaded", function () {

  // Get review data from DOM
  const reviewCards = document.querySelectorAll(".review-card");
  const reviewsData = Array.from(reviewCards).map(card => {
    return {
      title: card.querySelector("h2").textContent,
      rating: card.querySelector(".rating").textContent,
      fullReview: card.querySelector(".review-snippet").textContent.trim(),
      img: card.querySelector("img").src
    };
  });

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalRating = document.getElementById("modal-rating");
  const modalReview = document.getElementById("modal-review");
  const modalImg = document.getElementById("modal-img");
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
    modalImg.src = reviewsData[index].img;
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
  
    // Add ESC key support for closing modal
    window.addEventListener('keydown', function(event) {
      const modal = document.getElementById('modal');
      if (event.key === 'Escape' && modal && modal.style.display === 'flex') {
        modal.style.display = 'none';
      }
    });

});