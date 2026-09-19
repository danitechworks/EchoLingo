namespace EchoLingo.DTOs
{
    public class TranslationRequestDto
    {
        public string Text { get; set; } = string.Empty;
        public string TargetLanguage { get; set; } = string.Empty;
    }
}
