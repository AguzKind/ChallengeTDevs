using Backend.Data;
using Backend.Models.DTOs;
using Backend.Models.Entities;
using Backend.Services;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _dbContext;
    private readonly JwtService _jwtService;

    public AuthController(AppDbContext dbContext, JwtService jwtService)
    {
        _dbContext = dbContext;
        _jwtService = jwtService;
    }
    [HttpPost("registro")]
    public IActionResult RegistrarUsuario(UsuarioDto registrarUsuarioDto)
    {
        var usuarioEntity = new Usuario()
        {
            Email = registrarUsuarioDto.Email,
            Contrasena = registrarUsuarioDto.Contrasena
        };
        _dbContext.Usuarios.Add(usuarioEntity);
        _dbContext.SaveChanges();
        return Ok(usuarioEntity);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] UsuarioDto loginUsuarioDto)
    {
        // Validación y lógica de autenticación
        var user = await _dbContext.Usuarios
            .FirstOrDefaultAsync(u => u.Email == loginUsuarioDto.Email);

        if (user == null || user.Contrasena != loginUsuarioDto.Contrasena)
        {
            return Unauthorized("Credenciales incorrectas.");
        }

        var token = _jwtService.GenerarToken(user.Id.ToString());

        return Ok(new { Token = token });
    }
}
