if (window.File && window.FileReader && window.FileList) {
  console.log("Todas las APIs soportadas");
} else {
  alert("La API de FILE no es soportada en este navegador.");
}
function handleFileSelect(e) {
  var video = e.target.files;
  video = video[0];
  if (video.type.includes("video")) {
    var reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        var div = document.getElementById("div-video");
        div.innerHTML = [
          '<video id="video" src="',e.target.result,'" width="620""/>',].join("");
      };
    })(video);
    reader.readAsDataURL(video);
    document.getElementById("botonera").classList.remove("oculto");
    alert("Cargando video");
  } else {
    alert("Error el archivo no es un vídeo");
  }
}
