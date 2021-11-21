using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Hitaya.DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using System.Data;

namespace Hitaya.DAL
{
    public class HitayaRepository
    {
        HITAYAContext context;

        public HitayaRepository()
        {
            context = new HITAYAContext();
        }

    }
}
