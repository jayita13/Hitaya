using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hitaya.DAL;
using Hitaya.DAL.Models;
using Hitaya.ServiceLayer;
using Hitaya.ServiceLayer.Models;
//using Microsoft.AspNetCore.Authorization;

namespace Hitaya.ServiceLayer.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class HitayaController : Controller
    {
        public HitayaRepository Invest;

        public HitayaController()
        {
            Invest = new HitayaRepository();
        }


        //[AllowAnonymous]
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

        [HttpPost]
        public int AdminLoginValidation(registerUser obj)
        {
            int result;
            try
            {
                result = Invest.AdminLogin(obj.EMAILID, obj.PASSWORD);

            }
            catch (Exception)
            {

                result = -98;
            }
            return result;
        }


        public int SignUpValidation(SignUp obj)
        {
            int result;
            try
            {

                result = Invest.SignUpValidation(obj.EMAILID, obj.PASSWORD, obj.CRYTOID, obj.LIMIT);

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
