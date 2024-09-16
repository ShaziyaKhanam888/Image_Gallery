const images = document.querySelectorAll("img");

// Add click event listener to all images
images.forEach((image) => {
  image.addEventListener("click", () => {
    // Check if the image is already enlarged
    if (image.classList.contains("enlarged")) {
      image.classList.remove("enlarged"); // Remove enlarged class to revert back to original size
    } else {
      // First remove the enlarged class from any other image
      images.forEach((img) => img.classList.remove("enlarged"));

      // Add enlarged class to the clicked image
      image.classList.add("enlarged");
    }
  });
});
