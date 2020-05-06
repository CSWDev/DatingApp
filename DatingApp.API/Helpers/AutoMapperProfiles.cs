using System.Linq;
using AutoMapper;
using DatingApp.API.DTOS;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        // auto mapper uses profiles to help it understand 
        // source and destination of what is being mapped

        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDTO>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                    opt.MapFrom(scr => scr.Photos.FirstOrDefault(p => p.IsMain).Url))
                .ForMember(dest => dest.Age, opt =>
                    opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<User, UserForDetailsDTO>()
                .ForMember(dest => dest.PhotoUrl, opt => 
                    opt.MapFrom(scr => scr.Photos.FirstOrDefault(p => p.IsMain).Url))
                .ForMember(dest => dest.Age, opt =>
                    opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<Photo, PhotosForDetailsDTO>();
            CreateMap<Photo, PhotoForReturnDTO>();
            CreateMap<PhotoForCreationDTO, Photo>();
            CreateMap<UserForUpdateDTO, User>();
        }
    }
}