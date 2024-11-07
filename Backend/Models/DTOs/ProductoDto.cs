using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models.DTOs
{
    public class ProductoDto
    {
        [MaxLength(100)]
        public required string ProductoNombre { get; set; }
        [MaxLength(500)]
        public string? ProductoDescripcion { get; set; }

        [Column(TypeName = "decimal(6, 2)")]
        public required decimal ProductoPrecio { get; set; }

        public required int ProductoStock { get; set; }
    }
}
