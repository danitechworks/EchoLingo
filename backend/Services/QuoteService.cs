using EchoLingo.DTOs;
using EchoLingo.Interfaces;
using System.Net.Http.Json;

namespace EchoLingo.Services
{
    public class QuoteService : IQuoteService
    {
        private readonly HttpClient _httpClient;

        public QuoteService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task<QuoteResponseDto> GetRandomQuoteAsync()
        {
            var externalQuote = await _httpClient.GetFromJsonAsync<DummyJsonQuoteDto>("https://dummyjson.com/quotes/random");

            if (externalQuote is null)
            {
                throw new InvalidOperationException("The quote API returned no data.");
            }

            return new QuoteResponseDto
            {
                Text = externalQuote.Quote,
                Author = externalQuote.Author
            };
        }
    }
}
