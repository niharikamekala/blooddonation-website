document.getElementById('donationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent actual form submission

  // Show popup
  document.getElementById('thankYouPopup').style.display = 'flex';

  // Optionally, clear form after submission
  // this.reset();
});

function closePopup() {
  document.getElementById('thankYouPopup').style.display = 'none';

  // Optional: reset form when popup closes
  document.getElementById('donationForm').reset();

  // Optional: show form again if it was hidden
  // document.getElementById('donationForm').style.display = 'block';
}
