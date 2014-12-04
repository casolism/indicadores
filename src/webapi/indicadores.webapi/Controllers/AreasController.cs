using indicadores.webapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace indicadores.webapi.Controllers
{

    /// <summary>
    /// Area's controller
    /// </summary>
    public class AreasController : ApiController
    {


        /// <summary>
        /// Get api/Area/K3000
        /// </summary>
        /// <param name="id">The area's code</param>
        /// <returns></returns>
        public AreaModel Get(string id)
        {
            return new AreaModel() { id = 1, totalrevenues = 200, totalexpenditure = 300 };
        }

    }
}
