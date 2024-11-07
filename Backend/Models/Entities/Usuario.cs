using System.ComponentModel.DataAnnotations;

namespace Backend.Models.Entities
{
    public class Usuario
    {
        public Guid Id { get; set; }

        [EmailAddress]
        [Required]
        public required string Email { get; set; }

        [MaxLength(20)]
        [Required]
        public required string Contrasena { get; set; }
    }
}
