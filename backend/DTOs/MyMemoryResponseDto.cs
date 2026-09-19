namespace EchoLingo.DTOs
{
    public class MyMemoryResponseDto
    {
        public MyMemoryResponseDataDto? ResponseData { get; set; } 
        public int ResponseStatus { get; set; }
        public string ResponseDetails { get; set; } = string.Empty;
    }
}
