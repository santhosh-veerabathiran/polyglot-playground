using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace Windows
{
    public partial class SQLEmployeeTable2 : Form
    {
        public SQLEmployeeTable2()
        {
            InitializeComponent();
        }

        public SqlConnection con = new SqlConnection("Data Source=.\\SQLEXPRESS;AttachDbFilename=D:\\Program Files\\Visual C#\\Windows\\MyDataBase1.mdf;Integrated Security=True;Connect Timeout=30;User Instance=True");

        private void Button1_Click(object sender, EventArgs e)
        {
            string s = "Insert into Employee(EmpID, EmpName, Gender, Salary) values(@a, @b, @c, @d);";

            SqlCommand cmd = new SqlCommand(s, con);

            cmd.Parameters.AddWithValue("a", TextBox1.Text);
            cmd.Parameters.AddWithValue("b", TextBox2.Text);
            cmd.Parameters.AddWithValue("c", TextBox3.Text);
            cmd.Parameters.AddWithValue("d", TextBox4.Text);

            con.Open();

            int c = cmd.ExecuteNonQuery();
            string str = Convert.ToString(c);

            con.Close();

            MessageBox.Show(str + " rows inserted");
        }

        private void Button2_Click(object sender, EventArgs e)
        {
            string s = "Update Employee set EmpName = @b, Gender = @c, Salary = @d where EmpID = @a;";

            SqlCommand cmd = new SqlCommand(s, con);

            cmd.Parameters.AddWithValue("a", TextBox1.Text);
            cmd.Parameters.AddWithValue("b", TextBox2.Text);
            cmd.Parameters.AddWithValue("c", TextBox3.Text);
            cmd.Parameters.AddWithValue("d", TextBox4.Text);

            con.Open();

            int c = cmd.ExecuteNonQuery();
            string str = Convert.ToString(c);

            con.Close();

            MessageBox.Show(str + " rows updated");
        }

        private void Button3_Click(object sender, EventArgs e)
        {
            string s = "Delete from Employee where EmpID = @a;";

            SqlCommand cmd = new SqlCommand(s, con);

            cmd.Parameters.AddWithValue("a", TextBox1.Text);

            con.Open();

            int c = cmd.ExecuteNonQuery();
            string str = Convert.ToString(c);

            con.Close();

            MessageBox.Show(str + " rows deleted");
        }

        private void Button4_Click(object sender, EventArgs e)
        {
            string s = "Select * from Employee where EmpID = @a;";

            SqlCommand cmd = new SqlCommand(s, con);

            cmd.Parameters.AddWithValue("a", TextBox1.Text);
            
            con.Open();

            SqlDataReader r = cmd.ExecuteReader();

            if (r.Read())
            {
                TextBox2.Text = Convert.ToString(r.GetString(1));
                TextBox3.Text = Convert.ToString(r.GetString(2));
                TextBox4.Text = Convert.ToString(r.GetValue(3));

                MessageBox.Show("Selected");
            }
            else
            {
                MessageBox.Show("Record not found");
            }

            con.Close();
        }

        private void Button5_Click(object sender, EventArgs e)
        {
            string s = "Select * from Employee;";

            SqlCommand cmd = new SqlCommand(s, con);

            con.Open();

            SqlDataReader r = cmd.ExecuteReader();

            while (r.Read())
            {
                TextBox1.Text = Convert.ToString(r.GetValue(0));
                TextBox2.Text = Convert.ToString(r.GetString(1));
                TextBox3.Text = Convert.ToString(r.GetString(2));
                TextBox4.Text = Convert.ToString(r.GetValue(3));

                MessageBox.Show("Next");
            }

            con.Close();

            MessageBox.Show("Finished");
        }
    }
}
