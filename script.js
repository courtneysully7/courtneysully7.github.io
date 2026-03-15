document.addEventListener("DOMContentLoaded", function () {

  // Reverse the order of review cards in the DOM so newest (highest data-index) appears first
  const reviewGrid = document.querySelector(".review-grid");
  const reviewCards = Array.from(document.querySelectorAll(".review-card"));
  
  // Sort cards by data-index in descending order (newest first)
  reviewCards.sort((a, b) => {
    const indexA = parseInt(a.getAttribute("data-index"));
    const indexB = parseInt(b.getAttribute("data-index"));
    return indexB - indexA; // Descending order
  });
  
  // Re-append cards in reversed order
  reviewCards.forEach(card => reviewGrid.appendChild(card));

  // Get review data from DOM (after reordering)
  const reviewsData = reviewCards.map(card => {
    return {
      title: card.querySelector("h2").textContent,
      rating: card.querySelector(".rating").textContent,
      fullReview: card.querySelector(".review-snippet").innerHTML.trim(),
      img: card.querySelector("img").src
    };
  });
  
  // Create a mapping from data-index to array index (since data-index counts backwards)
  // data-index 30 (newest) maps to array index 0, data-index 0 (oldest) maps to array index 30
  const totalReviews = reviewCards.length;
  const indexMap = {};
  reviewCards.forEach((card, arrayIndex) => {
    const dataIndex = parseInt(card.getAttribute("data-index"));
    indexMap[dataIndex] = arrayIndex;
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

  // Review card clicks (use the reordered cards)
  reviewCards.forEach(card => {
    card.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      openModal(index);
    });
  });

  function openModal(dataIndex) {
    const arrayIndex = indexMap[dataIndex];
    modalTitle.textContent = reviewsData[arrayIndex].title;
    modalRating.textContent = reviewsData[arrayIndex].rating;
    modalReview.innerHTML = reviewsData[arrayIndex].fullReview;
    modalImg.src = reviewsData[arrayIndex].img;
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