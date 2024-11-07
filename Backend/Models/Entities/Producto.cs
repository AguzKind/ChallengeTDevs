using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models.Entities
{
    public class Producto
    {
        public int ProductoId { get; set; }

        [MaxLength(100)]
        [Required]
        public required string ProductoNombre { get; set; }

        [MaxLength(500)]
        public string? ProductoDescripcion { get; set; }
        
        [Column(TypeName = "decimal(6, 2)")]
        [Required]
        public required decimal ProductoPrecio { get; set; }

        [Required]
        public required int ProductoStock { get; set; }
    }
}
