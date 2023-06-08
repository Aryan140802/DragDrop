const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".image");
const resetButton = document.getElementById("resetButton");
const successMessage = document.getElementById("successMessage");
let originalBox;
let originalParent;

resetButton.addEventListener("click", resetContainers);

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("hovered");
  });

  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  box.addEventListener("drop", () => {
    if (box.contains(image)) return; // Skip if image is already in the box

    box.appendChild(image);
    successMessage.style.display = "block";
    originalBox = box; // Store the current box as the original box

    box.classList.remove("hovered");
  });
});

image.addEventListener("dragstart", (e) => {
  originalParent = e.target.parentElement; // Store the original parent element
});

function resetContainers() {
  if (originalParent) {
    originalParent.appendChild(image); // Append the image back to its original parent
    successMessage.style.display = "none"; // Hide the success message
    originalBox = null; // Reset the original box variable
    originalParent = null; // Reset the original parent variable
  }
}
