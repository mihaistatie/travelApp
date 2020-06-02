//Erase the Trip if the X button is clicked

function removeButton(event) {
 if (event.target.classList.contains("delete")) {
  event.target.closest(".myMeteoContent").remove();
 }
};

export default removeButton;