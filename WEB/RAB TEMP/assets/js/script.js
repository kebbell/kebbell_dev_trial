$(document).ready(function () {
  $("#about_scroll").fadeOut();
  $("#picks_scroll").fadeOut();
  $("#music_scroll").fadeOut();
  $("#games_scroll").fadeOut();
  $("#totw_scroll").fadeOut();
  $("#contact_scroll").fadeOut();

  $("#about").click(function () {
    $("#index").fadeOut();
    $("#about_scroll").fadeIn();
    $("#about_left").addClass("animated slideInLeft");
    $("#about_right").addClass("animated slideInRight");
  });

  $("#picks").click(function () {
    $("#index").fadeOut();
    $("#picks_scroll").fadeIn();
    $("#picks_left").addClass("animated slideInLeft");
    $("#picks_right").addClass("animated slideInRight");
  });

  $("#music").click(function () {
    $("#index").fadeOut();
    $("#music_scroll").fadeIn();
    $("#music_left").addClass("animated slideInLeft");
    $("#music_right").addClass("animated slideInRight");
  });
  $("#games").click(function () {
    $("#index").fadeOut();
    $("#games_scroll").fadeIn();
    $("#games_left").addClass("animated slideInLeft");
    $("#games_right").addClass("animated slideInRight");
  });

  $("#totw").click(function () {
    $("#index").fadeOut();
    $("#totw_scroll").fadeIn();
    $("#totw_left").addClass("animated slideInLeft");
    $("#totw_right").addClass("animated slideInRight");
  });

  $("#contact").click(function () {
    $("#index").fadeOut();
    $("#contact_scroll").fadeIn();
    $("#contact_left").addClass("animated slideInLeft");
    $("#contact_right").addClass("animated slideInRight");
  });

  $(".back").click(function () {
    $(".pages").fadeOut();
    $("#index").fadeIn();
    $("#index_left").addClass("animated slideInLeft");
    $("#index_right").addClass("animated slideInRight");
  });
});

 