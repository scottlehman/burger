$(document).ready(function () {
  $(".burger-devour").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr("id");
    console.log (id);

    var newState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function () {
      location.reload();
    });

  });

  $(".addBurgerButton").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#name").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    event.preventDefault();
    console.log(event);
    var id = $(this).attr("id");

    $.ajax("api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});