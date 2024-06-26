using WebApi.DTO;
using WebApi.Model;

namespace WebApi.Service
{
    public class Service: IService
    {
        private static List<Mouse> myszki = new List<Mouse>
            {
                new Mouse { MouseID = 1, Model = "Model 1", DPI = 100 },
                new Mouse { MouseID = 2, Model = "Model 2", DPI = 200 },
                new Mouse { MouseID = 3, Model = "Model 3", DPI = 300 },
                new Mouse { MouseID = 4, Model = "Model 4", DPI = 400 },
                new Mouse { MouseID = 5, Model = "Model 5", DPI = 500 }
            };
        public void Create(MouseRequestDTO requestDto)
        {
            var newMouse = new Mouse
            {
                DPI = requestDto.DPI,
                Model = requestDto.Model,
                MouseID = myszki.Max(m => m.MouseID) + 1
            };
            myszki.Add(newMouse);
        }

        public void Delete(int mouseId)
        {
            var deleteMouse = GetMouse(mouseId);
            myszki.Remove(deleteMouse);
        }

        private Mouse GetMouse(int mouseId)
        {
            var mouse = myszki.Find(m => m.MouseID == mouseId);
            if (mouse is null)
                throw new Exception($"Nie odnaleziono myszki o id: {mouseId}");

            return mouse;
        }

        public IEnumerable<MouseResponseDTO> GetAll()
        {
            return myszki.Select(m => ToDto(m));
        }
        private MouseResponseDTO ToDto(Mouse m)
        {
            return new MouseResponseDTO
            {
                MouseID = m.MouseID,
                DPI = m.DPI,
                Model = m.Model
            };
        }
    }
}
