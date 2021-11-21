using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hitaya.ServiceLayer.Models
{
    public class Doctor
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
