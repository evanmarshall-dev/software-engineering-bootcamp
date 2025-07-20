/**
 * A reusable modal component.
 * It exports a function to initialize the modal's event listeners.
 */

// Cache elements relevant to the modal
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
// Using querySelector for a more specific and robust selection
const closeBtn = document.querySelector("#myModal .close");

/**
 * Attaches event listeners to the modal buttons to handle its visibility.
 */
const initializeModal = () => {
  // Guard clause: if modal elements don't exist, do nothing.
  if (!modal || !openBtn || !closeBtn) {
    console.warn("Modal elements not found. Modal will not be initialized.");
    return;
  }

  openBtn.onclick = () => (modal.style.display = "flex");
  closeBtn.onclick = () => (modal.style.display = "none");

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};

// Export the function so it can be imported and used elsewhere.
export { initializeModal };
