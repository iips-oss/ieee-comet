function toggleReadMore(textId, btnElement) {
  var moreText = document.getElementById(textId);
  
  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnElement.innerHTML = 'Read Less <span>-</span>';
  } else {
    moreText.style.display = "none";
    btnElement.innerHTML = 'Read More <span>+</span>';
  }
}