

function copyText() {
  // Get the text field
  var copyText = document.getElementById("myInput");
  var link = "https://elskeptico.github.io/zombieapoc/modpack.mrpack";

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(link);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}