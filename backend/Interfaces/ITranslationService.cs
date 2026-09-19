using EchoLingo.DTOs;

namespace EchoLingo.Interfaces
{
    public interface ITranslationService
    {
        Task<TranslationResponseDto> TranslateAsync(TranslationRequestDto request);
    }
}
