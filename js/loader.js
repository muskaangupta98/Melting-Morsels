$(document).ready(function () {
  $(".parallax").parallax();

  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
    duration: 200,
  });

  $(".carousel.reviews").carousel({
    shift: 55,
    padding: 40,
  });
});
