using EchoLingo.DTOs;
using Microsoft.AspNetCore.Mvc;
using EchoLingo.Services;
using EchoLingo.Interfaces;

namespace EchoLingo.Controllers
{
    [ApiController]
    [Route("api/quotes")] // sets the route for this controller to /api/quotes
    public class QuotesController : ControllerBase
    {
        private readonly IQuoteService _quoteService;
        private readonly ILogger<QuotesController> _logger;

        public QuotesController(IQuoteService quoteService, ILogger<QuotesController> logger)
        {
            _quoteService = quoteService;
            _logger = logger;
        }

        [HttpGet("random")]
        public async Task<ActionResult<QuoteResponseDto>> GetRandomQuoteAsync()
        {
            try
            {
                var quote = await _quoteService.GetRandomQuoteAsync();
                return Ok(quote);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch a random quote.");

                return StatusCode(500, new
                {
                    message = "An error occurred while fetching the quote."
                });
            }
        }

    }
}
