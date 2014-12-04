using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace indicadores.webapi.Models
{

    /// <summary>
    /// Defines an area inside LAPEM. This could be an area, department, management or all LAPEM
    /// </summary>
    public class AreaModel
    {

        public int id { get;set;}
        public double totalrevenues { get; set; }
        public double totalexpenditure { get; set; }
    }
}