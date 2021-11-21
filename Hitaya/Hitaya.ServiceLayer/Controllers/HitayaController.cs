using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hitaya.DAL;
using Hitaya.DAL.Models;
using Hitaya.ServiceLayer;
using Hitaya.ServiceLayer.Models;

namespace Hitaya.ServiceLayer.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HitayaController : Controller
    {
        public HitayaRepository HAT;

        public HitayaController()
        {
            HAT = new HitayaRepository();
        }

        [HttpGet]
        public JsonResult GetDoctorDetails()
        {
            List<Hitaya.DAL.Models.Doctor> DoctorDetails;
            try
            {

                DoctorDetails = HAT.GetDoctorDetails();

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                DoctorDetails = null;
            }
            return Json(DoctorDetails);
        }
    }
}
