$(document).ready(function () {
  $("#download").on('click', function () {
    html2canvas(document.getElementById("pixel-board")).then(function (canvas) {                   
      var anchorTag = document.createElement("a");
        anchorTag.download = "pixelsArt.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
    })
  })
})
