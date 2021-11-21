using System;
using System.Collections.Generic;
using System.Linq;
using Hitaya.DAL.Models;
using System.Text;
using System.Threading.Tasks;
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

        public List<Doctor> GetDoctorDetails()
        {
            List<Doctor> usersList = null;
            try
            {
                usersList = context.Doctors
                                     .FromSqlRaw("SELECT * FROM ufn_GetDoctorDetails()").ToList();
            }
            catch (Exception)
            {
                usersList = null;
            }
            return usersList;
        }
    }
}
