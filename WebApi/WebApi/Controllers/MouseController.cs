using Microsoft.AspNetCore.Mvc;
using WebApi.DTO;
using WebApi.Service;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MouseController : ControllerBase
    {
        private readonly IService _mouseService;

        public MouseController(IService mouseService)
        {
            _mouseService = mouseService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<MouseResponseDTO>> Get()
        {
            var odp = _mouseService.GetAll();
            return Ok(odp);
        }
        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            try
            {
                _mouseService.Delete(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }


        }
        [HttpPost]
        public ActionResult Create([FromBody] MouseRequestDTO dto)
        {
            _mouseService.Create(dto);
            return NoContent();

        }     
    }
}
