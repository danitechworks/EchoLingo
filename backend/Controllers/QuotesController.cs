using EchoLingo.DTOs;
using Microsoft.AspNetCore.Mvc;
using EchoLingo.Services;

namespace EchoLingo.Controllers
{
    [ApiController]
    [Route("api/quotes")] // sets the route for this controller to /api/quotes
    public class QuotesController : ControllerBase
    {
        private readonly QuoteService _quoteService;

        public QuotesController(QuoteService quoteService)
        {
            _quoteService = quoteService;
        }

        [HttpGet("random")]
        public IActionResult GetRandomQuote()
        {
            var quote = _quoteService.GetRandomQuote();
            return Ok(quote);
        }

    }
}
