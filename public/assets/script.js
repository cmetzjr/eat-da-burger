$(document).ready(function() {

  //code for devour button

  $(".id").on("click", event => {
    event.preventDefault();
    
    //grab the ID of the burger being devoured
    var id = $(this)[0].activeElement.dataset.value;
    $.ajax({
      method: "PUT",
      url: "/burger/" + id
    }).then(data => {
      
      // reload page
      location.reload();
    });

  });

});
