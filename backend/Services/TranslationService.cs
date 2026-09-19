using EchoLingo.DTOs;
using EchoLingo.Interfaces;
using System.Net.Http.Json;

namespace EchoLingo.Services
{
    public class TranslationService : ITranslationService
    {
        private readonly HttpClient _httpClient;

        public TranslationService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<TranslationResponseDto> TranslateAsync(TranslationRequestDto request)
        {
            var text = Uri.EscapeDataString(request.Text);
            var languagePair = Uri.EscapeDataString($"en|{request.TargetLanguage}");

            var url = $"https://api.mymemory.translated.net/get" +
              $"?q={text}&langpair={languagePair}";

            var response = await _httpClient.GetFromJsonAsync<MyMemoryResponseDto>(url);

            if (response == null || response.ResponseStatus != 200 || string.IsNullOrWhiteSpace(response.ResponseData?.TranslatedText))
            {
                throw new InvalidOperationException("The translation API did not return a valid translation.");
            }

            return new TranslationResponseDto
            {
                TranslatedText = response.ResponseData?.TranslatedText
            };

        }
    }
}
