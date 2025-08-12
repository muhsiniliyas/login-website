let rotated = false;
function rotateCard() {
  const card = document.getElementById("card");
  rotated = !rotated;
  card.style.transform = rotated ? "rotateY(180deg)" : "rotateY(0deg)";
}
