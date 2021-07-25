using System;
using System.Collections.Generic;

#nullable disable

namespace Hitaya.DAL.Models
{
    public partial class Userdetail
    {
        public int Userid { get; set; }
        public string Empid { get; set; }
        public string Name { get; set; }
        public string Emailid { get; set; }
        public string Password { get; set; }
        public string Department { get; set; }
        public string CryptoId { get; set; }
        public decimal Limit { get; set; }
        public string Roleid { get; set; }
    }
}
