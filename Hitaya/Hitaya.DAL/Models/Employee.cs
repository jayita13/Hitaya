using System;
using System.Collections.Generic;

#nullable disable

namespace Hitaya.DAL.Models
{
    public partial class Employee
    {
        public string Empid { get; set; }
        public string Name { get; set; }
        public string Emailid { get; set; }
        public string Department { get; set; }
        public string Roleid { get; set; }
    }
}
