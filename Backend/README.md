
## API ASP.NET Core - Challenge TDevs

#### Obtener todos los Productos

```http
  GET /api/Productos
```



#### Agregar un Producto

```http
  POST /api/Productos
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `productoId`      | `int / identity` | ID del producto (se crea automaticamente en la DB) |
| `productoNombre`      | `string nvarchar(100)` | Nombre del Producto |
| `productoDescripcion`      | `string? / nvarchar(500)` | Descripción del Producto |
| `productoPrecio`      | `decimal(6, 2)` | Precio del Producto |
| `productoStock`      | `int` | Cantidad de stock del Producto |


#### Buscar un producto por ID o Nombre

```http
  GET /api/Productos/Buscar
```
| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `productoId`      | `int` | ID del producto a buscar |
| `productoNombre`      | `string` | Nombre del producto a buscar |

```bash
  https://localhost:7233/api/productos/buscar?nombre=
  O
  https://localhost:7233/api/productos/buscar?ID=
```

#### Editar un Producto

```http
  PUT /api/Productos/{id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `productoId`      | `int / identity` | ID del producto a editar |
| `productoNombre`      | `string nvarchar(100)` | Nombre del Producto |
| `productoDescripcion`      | `string? / nvarchar(500)` | Descripción del Producto |
| `productoPrecio`      | `decimal(6, 2)` | Precio del Producto |
| `productoStock`      | `int` | Cantidad de stock del Producto |

#### Editar un Producto

```http
  DELETE /api/Productos/{id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `productoId`      | `int / identity` | ID del producto a Eliminar |


## Códigos de respuesta

```bash
200 - 201 => Exito.
401 => No autorizado.
404 => No se encuentra el producto.
405 => Metodo no permitido.
```


## Registro, Logueo y JWT

> [!NOTE]  
> El login no fue realizado en el front, por eso se especifica en este README para ser testeado.

> [!Warning]  
> Recomiendo ampliamente utilizar Postman, ya que fue el software que utilicé para probar los endpoints.

#### Login

```http
  POST /api/auth/login
```

```bash
Ejemplo:
{
  "email": "aguzkind@gmail.com",
  "contrasena": "1234"
}
// Si no existe, retorna 401 y no permite el acceso
// Si existe, retorna un token para ser ingresado en el header de cada petición.

Respuesta:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYzZiNDZiMy00MmZkLTQwZjYtY2E0NC0wOGRjZmY2ZDA0OTUiLCJqdGkiOiI3NDY4ZWMwMy1mNTBmLTQwN2EtYjEyMi1jMGQyNTAwOTA2ZDEiLCJleHAiOjE3MzEwMTU5MzgsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyMzMiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MjMzIn0.du2vPac3zWxlkGOFQOGUQ_9pbqlh0_9j9nh65yGsYqo"
}
```
#### Registro

```http
  POST /api/auth/registro
```

```bash
Ejemplo:
{
  "email": "aguzkind@gmail.com",
  "contrasena": "1234"
}

Respuesta:
{
    "id": "ddc55286-7f00-49bd-ca45-08dcff6d0495",
    "email": "aguzkind@gmail.com",
    "contrasena": "1234"
}
```

## Documentación

#### FrontEnd

[Acceder a la documentación del FrontEnd](https://github.com/AguzKind/ChallengeTDevs/tree/main/Frontend)

#### Repositorio General

[Volver al inicio del Repo](https://github.com/AguzKind/ChallengeTDevs/tree/main)
