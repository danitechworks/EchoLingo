using EchoLingo.Interfaces;
using EchoLingo.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace EchoLingo.Controllers
{
    [ApiController]
    [Route("api/translate")] // sets the route for this controller to /api/translate
    public class TranslationController : ControllerBase
    {
        private readonly ITranslationService _translationService;
        private readonly ILogger<TranslationController> _logger;

        public TranslationController(ITranslationService translationService, ILogger<TranslationController> logger)
        {
            _translationService = translationService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<TranslationResponseDto>> TranslateAsync([FromBody] TranslationRequestDto request)
        {
            if (string.IsNullOrWhiteSpace(request.Text) || string.IsNullOrWhiteSpace(request.TargetLanguage))
            {
                return BadRequest("Text and TargetLanguage are required.");
            }

            if (Encoding.UTF8.GetByteCount(request.Text) > 500)
            {
                return BadRequest("Text exceeds the maximum allowed length of 500 characters.");
            }            
            
            try
            {
                var translation = await _translationService.TranslateAsync(request);
                return Ok(translation);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to translate the text.");

                return StatusCode(500, new
                {
                    message = "An error occurred while translating the text."
                });
            }
        }
    }
}
