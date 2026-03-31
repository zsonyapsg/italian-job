// Open image in modal
function openImg(imgElement) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

// Close modal when clicked
function closeImg() {
  document.getElementById("modal").style.display = "none";
}