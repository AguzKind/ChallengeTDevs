using System.ComponentModel.DataAnnotations;

namespace Backend.Models.DTOs
{
    public class UsuarioDto
    {
        [EmailAddress]
        [Required]
        public required string Email { get; set; }

        [MaxLength(20)]
        [Required]
        public required string Contrasena { get; set; }
    }
}
