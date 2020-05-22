using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatingApp.API.Models
{
    [Table("Photos")]
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
        public virtual User User { get; set;}
        public int UserID { get; set; }
    }
}