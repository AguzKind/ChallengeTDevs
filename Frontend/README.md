
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

Listo! Ahora se va a abrir Google Chrome con el Front ya funcionando:

![Frontend](https://i.imgur.com/p1pe45Z.png)

Como se puede ver, arriba aparece el error `Network Error`, eso es porque aun no levantamos el Backend. Vamos a ver como...


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

Listo! Ahora podemos probar todo el sistema con algunas operaciones CRUD.
## CRUD

Primero, recargamos la pagina, y podemos ver que el error que antes aparecia ya no está.
Eso significa que el sistema, tanto el front como el back, estan corriendo y la conexión fue exitosa.

Vamos a probar Agregando un nuevo producto. Para eso, hacemos click en `Agregar Producto` en la parte superior derecha.
Ahora, se va abrir una nueva ventana (Modal) para ingresar los datos del producto que queremos ingresar. Para agregarlo, hacemos click en `Agregar`. Ingresamos algunos datos y probamos (debemos recargar la página cada vez que realicemos alguna operación CRUD (podés hacerlo con la tecla `F5`)).

![crud agregar](https://i.ibb.co/7Wsn0GT/agregar.png)

Como podemos ver al recargar la pagina, ahora hay varios registros nuevos. En cada registro, tenemos dos botones para las acciones que quedan para el CRUD, que son `Modificar un producto` y `Eliminar un producto`. 

![crud modificar](https://i.ibb.co/jDjy7hK/editar.png)

Vamos a modificar el producto `Coca-Cola`. Vamos a hacer que, en vez de que sea `Coca-Cola`, ahora sea `Pepsi`, y el valor baje de `3000` a `2499.99`.

![crud modal editar](https://i.ibb.co/mJdGmBk/pepsi.png)

![crud modal editar2](https://i.ibb.co/xJ0Yh5C/pepsi2.png)

Genial, el producto fue modificado! Ahora, vamos a Eliminar el producto Pringles, ya que estan muy caros. Al darle a eliminar, nos preguntará si de verdad queremos eliminar ese producto. Si damos que si, se borrara de la base de datos (Eliminación Física).

![crud modal editar](https://i.ibb.co/xJ0Yh5C/pepsi2.png)

Listo, el producto seleccionado fue eliminado.

Como vemos, tanto el Front como el Back funcionan perfectamente. Obviamente hay cosas que agregaria/modificaria para que sea mas pensado en el usuario y facilitar algunas cosas (que no se deba apretar `F5` cada vez que se hace alguna acción CRUD, Hacer la eliminación Logica y no física, implementar el registro y login, etc), pero decidí hacerlo simple por ser un challenge, pero con estilo.


## Documentación

#### FrontEnd

[Acceder a la documentación del FrontEnd](#)

#### Backend

[Acceder a la documentación del Backend](#)

