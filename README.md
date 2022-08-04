# Notes App - SPA (React, Node)

Notes App es una SPA (Single Page Application) basada en notas que permite:

* Iniciar y cerrar sesión
* Crear una nota 
* Editar una nota
* Eliminar nota
* Archivar/desarchivar una nota
* Visualizar las notas creadas
* Visualizar las notas archivadas
* Filtrar las notas por categorias

## Stack tecnológico utilizado

_El stack tecnológico utilizado para el FRONTEND fue el siguiente:_

* [React 18.2.0](https://es.reactjs.org/) - Librería para creación de interfaces interactivas
* [Npm 8.15.1](https://www.npmjs.com/) - Manejador de dependencias
* [Vite 3.0.0](https://vitejs.dev/) - Herramienta frontend para creación de proyectos
* [Bootstrap 5.2.0](https://getbootstrap.com/) - Framework CSS

_El stack tecnológico utilizado para el BACKEND fue el siguiente:_

* [Node.js 16.13.2](https://nodejs.org/es/) - Entorno de ejecución
* [Express 4.18.1](https://expressjs.com/) - Framework de desarrollo web para Node.js
* [Sequelize 6.21.3](https://sequelize.org/) - ORM (Object Relational Mapping)
* [MySQL2 2.3.3](https://getbootstrap.com/) - Cliente MySQL para Node.js
* [XAMPP 8.1.6](https://www.apachefriends.org/es/index.html) - Entorno de desarrollo local
* [MariaDB 10.4.24](https://mariadb.org/) - Sistema de gestión de base de datos de XAMPP

# Despliegue 

Para el despliegue de la aplicación se utilizaron [_Netlify_](https://www.netlify.com/) y [_Heroku_](https://heroku.com/), a continuación se comparte el enlace de despliegue:

### [Fullstack notes app](https://fullstack-notes-app.netlify.app)

## ¿Quieres probar el proyecto localmente? 

Primero será necesario que clones el repositorio remoto, para esto debes abrir la consola y dirigerte a la ruta especifica donde quieres que sea clonado el repositorio ejecutando el siguiente comando:

```
git clone https://github.com/camilapensolvers/GitHubLuisFJojoa-Ensolvers-challange.git
```

A continuación, ingresa a la carpeta generada a partir del comando git clone:

```
cd GitHubLuisFJojoa-Ensolvers-challange
```

### Configuración del BACKEND si tu sistema operativo o entorno de trabajo es Linux/macOS

Una vez ingreses a la carpeta te encontrarás con el archivo *bash.sh*, este archivo contiene toda la configuración para crear la base de datos a través del gestor Mysql. Además, instalará las dependencias necesarias para el backend y, por último, lo desplegará.  

**Nota 1:** El parametro *mysql* dentro del archivo *bash.sh* debe ser modificado segun el gestor de base de datos que usted tenga configurado en su máquina.
**Nota 2:** Una vez ejecute el comando mostrado a después de este enunciado, a través de la consola se le solicitará la contraseña para el usuario **root** de su gestor de base de datos, si usted trabaja con un usuario diferente a este, por favor modifique ese valor en el archivo *bash.sh* solamente donde corresponde.

Basta con ejecutar los siguientes comandos para levantar el backend correctamente

```
./bash.sh
```

###  Configuración del BACKEND si tu sistema operativo o entorno de trabajo es Windows

Será necesario que configures una base de datos relacional en tu máquina, una forma sencilla de hacerlo es instalar [XAMPP](https://www.apachefriends.org/es/index.html) que te ofrece un ambiente de desarrollo completo y, seguido a esto, crear la base de datos con el nombre **ensolvers_bd** con el fin de que la aplicación backend se conecte sin problema a dicha base de datos.

**Nota:** Si necesitas un tutorial para crear una base de datos con XAMPP lo dejo [aquí](http://panamahitek.com/bases-de-datos-mysql-con-xampp/)

A continuación, será necesario instalar las dependencias necesarias para el backend y, por último, desplegar la aplicación backend.

Basta con ejecutar los siguientes comandos para levantar el backend correctamente

```
cd GitHubLuisFJojoa-Ensolvers-challange
cd backend
npm install
npm run start
```

###  Configuración del FRONTEND para cualquier sistema operativo o entorno de trabajo

Una vez confgiurado y desplegado el backend, será necesario abrir otra consola (la anterior tendrá desplegado el log del backend) y ubicarse en la raíz de proyecto con el fin de instalar las dependencias necesarias para el frontend y exponer la aplicación localmente.

Basta con ejecutar los siguientes comandos para levantar el frontend correctamente

```
cd GitHubLuisFJojoa-Ensolvers-challange
cd frontend
npm install
npm run dev
```

Habitualmente, el frontend se despliega en la dirección [http://localhost:5173](http://localhost:5173). Sin embargo, puede variar debido a la ocupación del puerto por un proceso que se esté ejecutando en su máquina. Para esto, una vez el frontend es desplegado, la consola muestra la url en la cual se puede visualizar.

###  Y... eso es todo, una vez ejecute los pasos mencionados con anterioridad, tendrá la aplicación completa desplegada localmente.

---
Hecho con ❤️ por [Fernando Jojoa](https://github.com/LuisFJojoa/) 😊


