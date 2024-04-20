using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace WindowsFormsApp
{
    public partial class OLEDBEmployeeTable1 : Form
    {
        public OLEDBEmployeeTable1()
        {
            InitializeComponent();
        }

        private void OLEDBEmployeeTable1_Load(object sender, EventArgs e)
        {
            oleDbDataAdapter1.Fill(dataSet21);
        }

        private void Button1_Click(object sender, EventArgs e)
        {
            employeeBindingSource.MovePrevious();
        }

        private void Button2_Click(object sender, EventArgs e)
        {
            employeeBindingSource.MoveNext();
        }

        private void Button3_Click(object sender, EventArgs e)
        {
            employeeBindingSource.MoveFirst();
        }

        private void Button4_Click(object sender, EventArgs e)
        {
            employeeBindingSource.MoveLast();
        }
    }
}
