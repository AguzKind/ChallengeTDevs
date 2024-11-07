# Challenge TogetherDevs

Challenge realizado por Agustín Macoggi para la empresa TogetherDevs.

El challenge consistía en el desarrollo de un sistema Fullstack, con las tecnologías React, .NET 8 y MS SQL.  El mismo fue realizado en el transcurso de tres dias.
[Podes acceder a los requerimientos del challenge haciendo click aquí.](https://drive.google.com/file/d/1aXUsSON9seD5_7m1QzkH9tCjkNLu-jjq/view) Como se mencionó antes, el proyecto consta de 2 partes (en realidad son 3, pero voy a desarrollar esto mas adelante). 

Antes que nada, quiero agradecer a TogetherDevs, por darme la oportunidad de poner a prueba mis conocimientos, y aprender cosas nuevas en el camino.

Ahora sí, vamos a conocer el proyecto!

## Frontend



En el Frontend utilice las siguientes tecnologías:

| Tecnologías | Version utilizada | Web |
| :-------- | :------- | :------- |
| `autoprefixer` | `10.4.20` | [Tailwindcss](https://tailwindcss.com/docs/guides/vite)
| `axios` | `1.7.7` |[Axios](https://axios-http.com/)
| `postcss` | `8.4.47` | [Tailwindcss](https://tailwindcss.com/docs/guides/vite)
| `react` | `18.3.1` | [React](https://react.dev/)
| `tailwindcss` | `3.4.14` | [Tailwindcss](https://tailwindcss.com/docs/guides/vite)
| `daisyui` | `4.12.14` |[daisyui](https://daisyui.com/)
| `Vite` | `5.4.10` | [Vite](https://vite.dev/)
| `NodeJS` | `22.11.0` | [NodeJS](https://nodejs.org/en)
| `Visual Studio Code` | `1.95.0` | [Visual Studio Code](https://code.visualstudio.com/)

Las mismas fueron seleccionadas para facilitar el uso, la implementación de componentes, simplicidad en el código y por previo conocimiento de alguna de ellas.

Para poder levantar el proyecto, primero tenemos que descargar el mismo. Para eso, tenes que ir a la parte de arriba del proyecto, donde dice `<> Code`, hacer click, y después seleccionar `Download ZIP`

![Descargar Proyecto](https://i.imgur.com/yIjcEOE.png)

Cuando ya lo tengamos descargado, procedemos a extraerlo, y cuando finalize, van a quedar dos carpetas, Frontend y Backend. Por ahora, solo nos interesa la primera.

Vamos a hacer click derecho en cualquier parte de la carpeta que no sea en un archivo, abrimos una consola de comandos y colocamos `npm i` y damos enter.

> [!NOTE]  
> Lo que hace `npm i` es instalar todas las dependencias que se encuentran en el archivo `package.json`

![CMD](https://i.imgur.com/JtVT2qx.png)

Ahora, en la misma consola, colocamos `npm run dev`, damos enter, y cuando se termine, nos va a aparecer el link para acceder al Frontend. Para ir, mantenemos apretada la tecla `CTRL` y hacemos click en el link en `Local`.

![PaginaFrontend](https://i.imgur.com/UHTHGwA.png)

Listo! Ahora se va a abrir Google Chrome con el Front ya funcionando.
## Backend



En el Backend utilice las siguientes tecnologías:

| Tecnologías | Version utilizada | Web |
| :-------- | :------- | :------- |
| `.NET 8` | `8.0.10` | [.NET](https://dotnet.microsoft.com/es-es/)
| `ASP.NET Core` | `7.0.0` | [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet)
| `Entity Framework Core` | `8.0.10` | [EF Core](https://learn.microsoft.com/en-us/ef/core/)
| `Microsoft SQL Server 2022 (Developer)` | `16.0.0` | [MS SQL](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
| `SQL Server Management Studio` | `20.2.30` | [SQL SSMS](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)
| `Visual Studio Enterprise 22` | `17.8.03` | [Visual Studio 2022](https://visualstudio.microsoft.com/es/vs/)

Primero, quiero explicar algo. Si bien se pudo haber realizado con el modelo DataBase-First, decidí optar por el modelo Code-First con el EF Core, ya que creí que asi podía aprender mucho mas, y ademas le añadía un poco mas de complejidad al challenge.

Ahora, para ejecutar el Backend, tenemos que entrar a la carpeta correspondiente, y ejecutar el archivo `Backend.sln`. Una vez ejecutado, debemos crear la migración y hacer un update a la base de datos.

Para eso, vamos a la pestaña `Tools (Herramientas) -> NuGet Package Manager (Administrador de paquetes NuGet) -> Package Manager Console (Consola de Administrador de Paquetes)`
![package manager console](https://i.ibb.co/vkTDRYg/tools.png)

Ahora, en la consola de abajo que se acaba de abrir, colocamos `add-migration "ElNombreDeLaMigración"`. Cuando finalice, colocamos `update-database` y esperamos. Cuando termine, la base de datos y las tablas ya van a estar creadas!

> [!NOTE]  
> Lo que hace `add-migration "ElNombreDeLaMigración"` es crear una nueva migración a traves de lo que esta escrito en el código, como abstracciones para poder crearlas en una base de datos. Para que surja efecto, usamos `update-database` y listo.

Por ultimo, hacemos click en `https` para correr el Backend.
![package manager console](https://i.ibb.co/kKWwBRm/https.png)

> [!WARNING]  
> Se va a abrir automaticamente una nueva ventana de Google Chrome con una pestaña con Swagger. No la cierres, ya que si lo haces, el proyecto va a dejar de ejecutarse. Además, lo vamos a usar mas adelante para verificar que hay un endpoint para regitro y login, junto con JWT (no fue implementado en la parte del Frontend).

## Documentación

#### FrontEnd

[Acceder a la documentación del FrontEnd](https://github.com/AguzKind/ChallengeTDevs/tree/main/Frontend)

#### Backend

[Acceder a la documentación del Backend](https://github.com/AguzKind/ChallengeTDevs/tree/main/Backend)
