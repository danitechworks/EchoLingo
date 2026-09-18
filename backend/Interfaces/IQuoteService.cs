using EchoLingo.DTOs;

namespace EchoLingo.Interfaces
{
    public interface IQuoteService
    {
        QuoteResponseDto GetRandomQuote();
    }
}
