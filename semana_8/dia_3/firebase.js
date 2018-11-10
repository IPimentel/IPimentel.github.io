/*
  Para utilizar firebase
  necesitamos instalar firebase-tools

    npm install -g firebase-tools

  Luego iniciaremos sesión con nuestra cuenta
  de google corriendo:

    firebase login

  Despues de hacer login nos iremos de nuestra
  terminal al directorio del dia de hoy
  (semana_8/dia_3) y correremos el comando

    firebase init

  En las opciones seleccionaremos hosting solamente
  y utilizaremos todas las opciones default

  Ahora implementaremos
  firebase auth, para iniciar debemos crear
  un proyecto dentro de la consola de firebase

  https://console.firebase.google.com/

  Una vez creado el proyecto debemos copiar el
  código que nos provee firebase para poder
  utilizarlo dentro de nuestro archivo de
  javascript

  Ya que tenemos el código vamos a cargar la
  página y ver que no ocurra error alguno.

  Despues iremos a la parte de auth de nuestro
  proyecto y habilitaremos autenticación con
  google

  El ejercicio a realizar el día de hoy es crear
  una pequeña aplicación que tenga un botón de
  iniciar sesión, cuando sea presionado se 
  utilizarán las funciones de firebase para hacer
  la autenticación con google y posteriormente
  mostraremos el nombre del usuario que inició
  sesión.

  Metas adicionales del ejercicio:
  - Implementar un botón para cerrar sesión
  - Detectar si el usuario ya tiene sesión 
    iniciada cuando la página cargue

  - Ver en la consola de firebase tu usuario
    que inicio sesión, también puedes subir
    tu demo a github pages y compartirlo con
    tus compañeros, una vez que inicien sesión
    podrás ver sus nombres y correos en la
    consola de tu proyecto
*/