using EchoLingo.DTOs;

namespace EchoLingo.Interfaces
{
    public interface IQuoteService
    {
        Task<QuoteResponseDto> GetRandomQuoteAsync();
    }
}
