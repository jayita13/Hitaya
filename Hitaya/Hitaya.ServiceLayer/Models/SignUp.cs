using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hitaya.ServiceLayer.Models
{
    public class SignUp
    {
        public string USERNAME { get; set; }
        public string EMAILID { get; set; }
        public string PASSWORD { get; set; }
        public string CRYTOID { get; set; }
        public decimal LIMIT { get; set; }
    }
}
