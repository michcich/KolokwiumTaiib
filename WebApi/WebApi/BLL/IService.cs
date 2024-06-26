using WebApi.DTO;

namespace WebApi.Service
{
    public interface IService
    {
        IEnumerable<MouseResponseDTO> GetAll();
        void Delete(int mouseId);
        void Create(MouseRequestDTO requestDto);
    }
}
