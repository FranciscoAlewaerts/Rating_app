var form= document.getElementById("commentForm");


function review(){
   location.href = "https://g.page/r/CZAZWX-EFxLwEBM/review" 
}

function comment(){
form.setAttribute("style","display:flex")

}

function enviar(){
   const message = document.getElementById("message");
form.setAttribute("style", "display:none");
message.textContent = "Gracias por su comentario!";
}