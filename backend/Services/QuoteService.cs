using EchoLingo.DTOs;
using EchoLingo.Interfaces;

namespace EchoLingo.Services
{
    public class QuoteService : IQuoteService
    {
        public QuoteResponseDto GetRandomQuote()
        {
            var quotes = new List<QuoteResponseDto>
            {
                new QuoteResponseDto { Text = "The only way to do great work is to love what you do.", Author = "Steve Jobs" },
                new QuoteResponseDto { Text = "Life is what happens when you're busy making other plans.", Author = "John Lennon" },
                new QuoteResponseDto { Text = "The purpose of our lives is to be happy.", Author = "Dalai Lama" },
                new QuoteResponseDto { Text = "Get busy living or get busy dying.", Author = "Stephen King" },
                new QuoteResponseDto { Text = "You have within you right now, everything you need to deal with whatever the world can throw at you.", Author = "Brian Tracy" }
            };
            var random = new Random();
            var randomQuote = quotes[random.Next(quotes.Count)];
            return randomQuote;
        }
    }
}
