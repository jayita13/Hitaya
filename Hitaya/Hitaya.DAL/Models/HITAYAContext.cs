using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Hitaya.DAL.Models
{
    public partial class HITAYAContext : DbContext
    {
        public HITAYAContext()
        {
        }

        public HITAYAContext(DbContextOptions<HITAYAContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }
        public virtual DbSet<Userdetail> Userdetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\ProjectsV13;Initial Catalog=HITAYA;Trusted_Connection=true;Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasKey(e => e.Emailid)
                    .HasName("pk_EmailId_Admin");

                entity.ToTable("ADMIN");

                entity.Property(e => e.Emailid)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EMAILID");

                entity.Property(e => e.Adminid)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ADMINID");

                entity.Property(e => e.CryptoId)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("CRYPTO_ID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("NAME");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasKey(e => e.Emailid)
                    .HasName("pk_EmailId");

                entity.ToTable("EMPLOYEES");

                entity.HasIndex(e => e.Empid, "uniqz")
                    .IsUnique();

                entity.Property(e => e.Emailid)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EMAILID");

                entity.Property(e => e.Department)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("DEPARTMENT");

                entity.Property(e => e.Empid)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EMPID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("NAME");

                entity.Property(e => e.Roleid)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ROLEID");
            });

            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TRANSACTIONS");

                entity.Property(e => e.Amount)
                    .HasColumnType("decimal(38, 18)")
                    .HasColumnName("AMOUNT");

                entity.Property(e => e.CreditId)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("CREDIT_ID");

                entity.Property(e => e.DebitId)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("DEBIT_ID");

                entity.Property(e => e.SysTrnsDate)
                    .HasColumnName("SYS_TRNS_DATE")
                    .HasDefaultValueSql("(sysdatetime())");

                entity.Property(e => e.TransId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("TRANS_ID");
            });

            modelBuilder.Entity<Userdetail>(entity =>
            {
                entity.HasKey(e => e.Emailid)
                    .HasName("pk_EmailIdx");

                entity.ToTable("USERDETAILS");

                entity.Property(e => e.Emailid)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EMAILID");

                entity.Property(e => e.CryptoId)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("CRYPTO_ID");

                entity.Property(e => e.Department)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("DEPARTMENT");

                entity.Property(e => e.Empid)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EMPID");

                entity.Property(e => e.Limit)
                    .HasColumnType("decimal(38, 18)")
                    .HasColumnName("LIMIT");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("NAME");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.Property(e => e.Roleid)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ROLEID");

                entity.Property(e => e.Userid)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("USERID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
