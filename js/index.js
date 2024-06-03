$(function () {
  // Include header
  $("#header").load("header.html", function () {
    var location = document.getElementById("location");
    var googlemapPart = document.getElementById("googlemapPart");

    // Add event listener after header is loaded
    // scrolling section
    location.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      googlemapPart.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Include footer
  $("#footer").load("footer.html");
});

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  // Toggle the display style between block and none
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
