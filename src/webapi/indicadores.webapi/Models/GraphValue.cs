using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace indicadores.webapi.Models
{
    public class GraphValue
    {
        public DateTime Date { get; set; }
        public double Value { get; set; }
        
        /// <summary>
        /// Constructor
        /// </summary>
        public GraphValue()
        { }

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="date"></param>
        /// <param name="value"></param>
        public GraphValue(DateTime date, double value)
        {
            this.Date = date;
            this.Value = value;
        }

    }
}