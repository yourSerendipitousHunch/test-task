document.addEventListener("DOMContentLoaded", function() {
  // Get the "Ok" button in #p_modal3
  var okButton = document.querySelector("#p_modal_button3");

  // Attach an event listener to the "Ok" button
  okButton.addEventListener("click", function() {
    // Retrieve the user's responses from the input fields
    var response = document.querySelector("#userResponse").value;

    // Output the user's responses to the browser console
    console.log(response);
  });
});

