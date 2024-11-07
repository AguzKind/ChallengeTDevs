using Backend.Data;
using Backend.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Backend.Models.DTOs;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public ProductosController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // Endpoint que obtiene una lista con todos los productos.
        [HttpGet]
        public IActionResult ObtenerTodosProductos()
        {
            return Ok(dbContext.Productos.ToList());
        }
        // Endpoint que busca un producto, por su id o por su nombre
        [HttpGet("buscar")]
        public async Task<ActionResult<IEnumerable<Producto>>> BuscarProductos(
        [FromQuery] string? nombre,
        [FromQuery] int? id)
        {
            var query = dbContext.Productos.AsQueryable();
            if (!string.IsNullOrEmpty(nombre))
            {
                query = query.Where(p => p.ProductoNombre.Contains(nombre));
            }

            if (id.HasValue)
            {
                query = query.Where(p => p.ProductoId == id);
            }

            var productos = await query.ToListAsync();

            if (productos is null || productos.Count == 0)
            {
                return NotFound(new {message = "No existe el producto buscado"});
            }

            return Ok(productos);
        }


        // Endpoint que agrega un producto.
        [HttpPost]
        public IActionResult AgregarProducto(ProductoDto agregarProductoDto)
        {
            var productoEntity = new Producto()
            {
                ProductoNombre = agregarProductoDto.ProductoNombre,
                ProductoDescripcion = agregarProductoDto.ProductoDescripcion,
                ProductoPrecio = agregarProductoDto.ProductoPrecio,
                ProductoStock = agregarProductoDto.ProductoStock
            };
            dbContext.Productos.Add(productoEntity);
            dbContext.SaveChanges();
            return Ok(productoEntity);
        }

        // Endpoint que edita un producto en base a la ID.
        [HttpPut]
        [Route("{id}")]
        public IActionResult ModificarProducto(int id, ProductoDto modificarProductoDto)
        {
            var producto = dbContext.Productos.Find(id);
            if ( producto is null )
            {
                return NotFound("El producto no existe");
            }
            producto.ProductoNombre = modificarProductoDto.ProductoNombre;
            producto.ProductoDescripcion = modificarProductoDto.ProductoDescripcion;
            producto.ProductoPrecio = modificarProductoDto.ProductoPrecio;
            producto.ProductoStock = modificarProductoDto.ProductoStock;

            dbContext.SaveChanges();

            return Ok(producto);
        }

        // Endpoint que elimina un producto
        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            var producto = dbContext.Productos.Find(id);
            if (producto is null)
            {
                return NotFound("El producto no existe");
            }
            dbContext.Productos.Remove(producto);
            dbContext.SaveChanges();
            return Ok("Producto eliminado");
        }
    }
}
