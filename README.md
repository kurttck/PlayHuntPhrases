<div align="center">

# PlayHunt Phrases
</div>

![Java](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=ffffff)
![IntelliJ IDEA](https://img.shields.io/badge/-IntelliJ%20IDEA-000000?style=flat-square&logo=intellij-idea&logoColor=ffffff)
![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=ffffff)
![Spring Initializr](https://img.shields.io/badge/-Spring%20Initializr-6DB33F?style=flat-square&logo=spring&logoColor=ffffff)

¡Bienvenido/a a Playhunt Phrases! Este es un proyecto desarrollado en Java con Spring Boot que permite recibir frases icónicas de personajes de videojuegos de forma aleatoria. La aplicación obtiene las frases desde una base de datos, brindando detalles sobre la cita y el personaje que la pronunció.

## 🔧 Tecnologías Utilizadas

### Front-End:
- **Framework**: Angular 18, Tailwindcss.
- **Lenguaje**: TypeScript.

### Back-End:
- **Lenguaje de programación**: Java ☕
- **Framework**: Spring Boot 🌱 - Facilita la creación y configuración de aplicaciones Java, incluyendo el desarrollo de APIs RESTful.
- **Administración de dependencias**: Maven 🛠️ - Gestiona las dependencias y simplifica la construcción del proyecto.
- **JPA (Java Persistence API)**: Utilizada para mapear los objetos de Java a una base de datos y gestionar el almacenamiento de datos en PostgreSQL.
- **Base de Datos**: PostgreSQL 🐘 - Sistema de gestión de bases de datos relacional donde se almacenan los datos de los videojuegos.
- **IDE**: IntelliJ IDEA 💻 - Entorno de desarrollo integrado para la programación en Java.

  ## Requisitos

- **Java 8 o superior**: PlayHunt Game Manager está desarrollado en Java, por lo que necesitas tener el JDK instalado.
- **Spring Boot**: Framework utilizado para la estructura del proyecto y manejo de dependencias.
- **PostgreSQL**: Base de datos relacional donde se almacenan los datos de los videojuegos.
- **Angular 18**: Framework para el desarrollo del front-end que permite crear una interfaz de usuario dinámica e interactiva.
  - **Node.js**: Angular requiere Node.js para ejecutar el CLI y gestionar dependencias. Se recomienda tener la versión 18 o superior.
  - **Angular CLI**: Herramienta de línea de comandos de Angular para la creación, desarrollo y despliegue de la aplicación. Puedes instalarla con `npm install -g @angular/cli`.
  - **NPM (Node Package Manager)**: Para instalar y gestionar las dependencias de Angular. Suele venir con Node.js.
 
# Instalación

## 1. Configuración de la base de datos

Asegúrate de tener PostgreSQL instalado y en funcionamiento. Crea una base de datos para el proyecto:

```sql
CREATE DATABASE playhuntphrases;
````

Te facilito algunos datos.(ingresarlos despues de haber levantado el back)
```sql
insert into phrases(phrase, game, character, image) values('No importa cuántas veces caigas, lo importante es cuántas veces te levantas.','Final Fantasy X','Auron','https://i.imgur.com/T4icgN6.jpeg')
insert into phrases(phrase, game, character, image) values('Un hombre fuerte no necesita leer el futuro. Él lo crea.','Metal Gear Solid','Solid Snake','https://w0.peakpx.com/wallpaper/64/1014/HD-wallpaper-solid-snake-metal-gear-solid.jpg')
insert into phrases(phrase, game, character, image) values('El ciclo termina aquí. Debemos ser mejores.','God of War','Kratos','https://www.chromethemer.com/download/hd-wallpapers/god-of-war-kratos-3840x2160.jpg')
insert into phrases(phrase, game, character, image) values('El tiempo pasa, la gente viene y va. Pero nada puede borrar las memorias de importantes momentos.','The Legend of Zelda: Ocarina of Time','Link','https://e0.pxfuel.com/wallpapers/339/769/desktop-wallpaper-the-master-sword-in-the-temple-of-time-ocarina-of-time-legend-young-link.jpg')
insert into phrases(phrase, game, character, image) values('No estoy aquí por el pasado, ni por lo que pasó. Estoy aquí por el futuro.','Final Fantasy VII','Cloud Strife','https://mrwallpaper.com/images/hd/cloud-strife-wallpaper-z4yzy1hjb2zl5pak.jpg')
insert into phrases(phrase, game, character, image) values('Cuando estás perdido en la oscuridad, busca la luz.','The Last of Us','Joel','https://mrwallpaper.com/images/hd/joel-and-ellie-hiding-the-last-of-us-8vwz9dbinbbzscxv.jpg')
insert into phrases(phrase, game, character, image) values('La valentía es luchar aun cuando no tienes ninguna posibilidad de ganar.','Metroid','Samus Aran','https://images7.alphacoders.com/119/thumb-1920-1199150.jpg')
insert into phrases(phrase, game, character, image) values('Quizás si sigues adelante, encuentres la respuesta que estás buscando.','Final Fantasy X','Tidus','https://cdn2.steamgriddb.com/hero_thumb/846b5ac2fa57bc8f576bde1449f8f32c.jpg')
insert into phrases(phrase, game, character, image) values('Tú no necesitas una razón para ayudar a alguien.','Final Fantasy IX','Zidane Tribal','https://images6.alphacoders.com/901/thumb-1920-901006.jpg')
insert into phrases(phrase, game, character, image) values('No me rendiré. Así es cómo me he forjado, y así es cómo he logrado llegar tan lejos. No importa cuántas veces caiga, mi fe me levantará de nuevo.','Dark Souls','Solaire de Astora','https://i.pinimg.com/originals/98/6d/4d/986d4dda38c1272013d7d37e0c84fc41.jpg')
```

## 2. Configuración del backend (Java + Spring Boot)

1. Clona el repositorio del proyecto:

    ```bash
    git clone https://github.com/kurttck/PlayHuntPhrases.git
    cd playhunt-back
    ```

2. Configura las variables de entorno para la base de datos en tu sistema:

    ```bash
    export DB_HOST=localhost
    export DB_NAME=playhuntphrases
    export DB_USER=tu_usuario
    export DB_PASSWORD=tu_contraseña
    ```

3. Ejecuta el proyecto usando Maven o tu IDE de preferencia:

    ```bash
    ./mvnw spring-boot:run
    ```

## 3. Configuración del frontend (Angular 18)

1. Clona el repositorio del frontend:

    ```bash
    cd playhunt-front
    ```

2. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo de Angular:

    ```bash
    ng serve
    ```

El servidor de desarrollo estará disponible en `http://localhost:4200`.

## 4. Acceso a la aplicación

- El backend por defecto se ejecuta en `http://localhost:8080`.
- El frontend en `http://localhost:4200`.

Asegúrate de que el frontend se comunique con la API del backend configurando los endpoints de forma adecuada en el archivo de configuración de Angular.


## ✒️ Autor

[<img src="https://avatars.githubusercontent.com/u/82422415?v=4" width=115><br><sub>Kurt Angeles</sub>](https://github.com/kurttck)

## 😊 Contacto

* [LinkedIn](https://www.linkedin.com/in/kurt-angeles-segura/).
* [GitHub](https://github.com/kurttck).
  
