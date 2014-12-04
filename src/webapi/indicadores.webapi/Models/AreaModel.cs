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
        public IList<GraphValue> GraphValue { get; set; }


        private void LoadMockDataForGraph()
        {
            this.GraphValue.Add(new GraphValue(new DateTime(2003, 8, 24), 0.8709));
            this.GraphValue.Add(new GraphValue(new DateTime(2003, 8, 25), 0.872));
            this.GraphValue.Add(new GraphValue(new DateTime(2003, 8, 26), 0.8714));
        }

        /// <summary>
        /// Constructor
        /// </summary>
        public AreaModel()
        {
            this.GraphValue = new List<GraphValue>();
            LoadMockDataForGraph();
        }

    }
}