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


        public int LoginValidation(string EMAILID, string PASSWORD)
        {

            int result = -1;
            int returnResult = 0;
            try
            {

                SqlParameter prmEMAILID = new SqlParameter("@EMAILID", EMAILID);
                SqlParameter prmPASSWORD = new SqlParameter("@PASSWORD", PASSWORD);



                SqlParameter prmReturnResult = new SqlParameter("@ReturnResult", System.Data.SqlDbType.Int);
                prmReturnResult.Direction = System.Data.ParameterDirection.Output;

                result = context.Database.ExecuteSqlRaw("EXEC @ReturnResult = usp_LoginValidation @EMAILID, @PASSWORD", new[] { prmReturnResult, prmEMAILID, prmPASSWORD });
                returnResult = Convert.ToInt32(prmReturnResult.Value);

                Console.WriteLine(Convert.ToInt32(result));
                Console.WriteLine(returnResult);

            }
            catch (Exception)
            {
                returnResult = -99;
            }
            return returnResult;
        }
        
        public int AdminLogin(string EmailId,string Password)
        {
            
            int result = -1;
            try
            {
                 var admin = context.Admins.Where(x => x.Emailid == EmailId && x.Password == Password).FirstOrDefault();
                
                if (admin.Name.Length>0)
                {
                    return 1;
                }
                
            }
            catch (Exception)
            {

                return -99;
            }
            return result;





        }
    }
}
