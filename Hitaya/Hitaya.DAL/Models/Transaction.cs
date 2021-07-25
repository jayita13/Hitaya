using System;
using System.Collections.Generic;

#nullable disable

namespace Hitaya.DAL.Models
{
    public partial class Transaction
    {
        public int TransId { get; set; }
        public string DebitId { get; set; }
        public string CreditId { get; set; }
        public decimal Amount { get; set; }
        public DateTime? SysTrnsDate { get; set; }
    }
}
