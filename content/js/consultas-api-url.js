//
// Consultas API URL
//
// Sirve para definir apiUrl, que es la URL base de la API segun sea el ambiente de desarrollo o de producción
//

// Determinar la URL de la API segun sea el ambiente de desarrollo o de producción
let apiUrl;
switch (window.location.hostname) {
  case "localhost":
    apiUrl = "http://172.30.37.233:8001/v3";
    break;
  case "127.0.0.1":
    apiUrl = "http://172.30.37.233:8001/v3";
    break;
  default:
    apiUrl = "https://api.justiciadigital.gob.mx/v3";
}
