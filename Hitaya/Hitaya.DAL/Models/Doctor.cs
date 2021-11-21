using System;
using System.Collections.Generic;

#nullable disable

namespace Hitaya.DAL.Models
{
    public partial class Doctor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Specialization { get; set; }
        public string Education { get; set; }
        public int Experience { get; set; }
        public string Availability { get; set; }
        public string Timings { get; set; }
    }
}
