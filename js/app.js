$(document).foundation()
new Vivus(
    "my-svg-m",
    {
        duration: 200,
        file: "./images/template/logo-m.svg",
    },
    null
);
new Vivus(
    "my-svg",
    {
        duration: 200,
        file: "./images/template/logo.svg",
    },
    null
);
$(".title-bar").click(function() {
    $(".fi-list").toggleClass( "color" );
  });