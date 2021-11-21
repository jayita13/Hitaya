using System;
using System.Collections.Generic;

#nullable disable

namespace Hitaya.DAL.Models
{
    public partial class Admin
    {
        public int Adminid { get; set; }
        public string Name { get; set; }
        public string Emailid { get; set; }
        public string Password { get; set; }
        public string CryptoId { get; set; }
    }
}
