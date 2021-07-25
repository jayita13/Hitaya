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
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class HitayaController : Controller
    {
        public HitayaRepository Invest;

        public HitayaController()
        {
            Invest = new HitayaRepository();
        }


        [HttpPost]
        public int LoginValidation(registerUser obj)
        {
            int result;
            try
            {

                result = Invest.LoginValidation(obj.EMAILID, obj.PASSWORD);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                result = -99;
            }
            return result;
        }
    }
}
