//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Authentication;
//using Microsoft.AspNetCore.Authentication.Google;
//using Microsoft.AspNetCore.Authentication.Cookies;

//namespace Hitaya.ServiceLayer.Controllers
//{
//    [AllowAnonymous, Route("account")]
//    public class AccountController : Controller
//    {
//        [Route("google-login")]
//        public IActionResult GoogleLogin()
//        {
//            var properties = new AuthenticationProperties { RedirectUri = Url.Action("GoogleResponse") };
            
//            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
//        }

//        [Route("google-response")]
//        public async Task<IActionResult> GoogleResponse()
//        {
//            var result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);
//            var claims = result.Principal.Identities.FirstOrDefault()
//                .Claims.Select(claims => new
//                {
//                    claims.Issuer,
//                    claims.OriginalIssuer,
//                    claims.Type,
//                    claims.Value
//                });

//            return Json(claims);

//        }
//    }
//}
