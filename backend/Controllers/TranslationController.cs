using EchoLingo.Interfaces;
using EchoLingo.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace EchoLingo.Controllers
{
    [ApiController]
    [Route("api/translate")] // sets the route for this controller to /api/translate
    public class TranslationController : ControllerBase
    {
        private readonly ITranslationService _translationService;

        public TranslationController(ITranslationService translationService)
        {
            _translationService = translationService;
        }

        [HttpPost]
        public async Task<ActionResult<TranslationResponseDto>> TranslateAsync([FromBody] TranslationRequestDto request)
        {
            if (string.IsNullOrWhiteSpace(request.Text) || string.IsNullOrWhiteSpace(request.TargetLanguage))
            {
                return BadRequest("Text and TargetLanguage are required.");
            }

            var translation = await _translationService.TranslateAsync(request);
            return Ok(translation); 
        }
    }
}
