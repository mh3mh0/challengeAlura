//Archivo que encripta el texto ingresado por el usuario.

//Capturo texto ingresado por el usuario para encriptar
let botonEncriptar = document.querySelector("#encriptar");

botonEncriptar.addEventListener("click", () => {
  let textArea = document.querySelector("#texto-encriptar");
  // @ts-ignore
  let textoUsuario = textArea.value;
  textArea.classList.remove("error");

  //controlo que el texto solo tenga minúsculas y sin signos ni acentos.
  // @ts-ignore
  if (validarTexto(textoUsuario) == false) {
    //encriptado
    let textoEncriptado = encriptar(textoUsuario);
    let resultado = document.querySelector("#resultado");
    // @ts-ignore
    resultado.value = textoEncriptado;
  } else {
    // @ts-ignore
    textArea.value = "";
    textArea.classList.add("error");
    // @ts-ignore
    textArea.placeholder =
      "Recordá que solo se admiten minúsculas sin acentos.";
  }
});

//Funcion para encriptar texto.
function encriptar(textoUsuario) {
  let textoEncriptado = "";
  for (const clave in claves) {
    textoEncriptado = textoUsuario.replaceAll(clave, claves[clave]);
    //se actualiza el texto del usuario con las modificaciones ya realizadas.
    textoUsuario = textoEncriptado;
  }
  return textoEncriptado;
}
