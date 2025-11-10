using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace Windows
{
    public partial class BioData1 : Form
    {
        public BioData1()
        {
            InitializeComponent();
        }

        public string str;

        private void TextBox1_KeyPress(object sender, KeyPressEventArgs e)
        {
            int a = e.KeyChar;
            
            if((a >= 65 && a <= 90) || (a >= 97 && a <= 122) || (a == 32) || a == 8 ||a == 46) {}
            else 
            {
                e.KeyChar = '\0';
            }
        }

        private void TextBox2_KeyPress(object sender, KeyPressEventArgs e)
        {
            int a = e.KeyChar;

            if ((a >= 48 && a <= 57) || a == 8) { }
            else
            {
                e.KeyChar = '\0';
            }
        }

        private void TextBox3_KeyPress(object sender, KeyPressEventArgs e)
        {
            int a = e.KeyChar;

            if ((a >= 48 && a <= 57) || (a >= 97 && a <= 122) || (a == 64) || a == 8 || a == 46) { }
            else
            {
                e.KeyChar = '\0';
            }
        }

        private void TextBox4_KeyPress(object sender, KeyPressEventArgs e)
        {
            int a = e.KeyChar;

            if ((a >= 65 && a <= 90) || (a >= 97 && a <= 122) || (a == 32) || a == 8 || a == 46) { }
            else
            {
                e.KeyChar = '\0';
            }
        }

        private void Button1_Click(object sender, EventArgs e)
        {
            str += Label1.Text + "  " + TextBox1.Text + "\n";

            str += Label2.Text + "  " + TextBox2.Text + "\n";

            str += Label3.Text + "  " + TextBox3.Text + "\n";

            str += Label4.Text + "  " + TextBox4.Text + "\n";

            str += Label5.Text + "  ";

            if (RadioButton1.Checked)
            {
                str += RadioButton1.Text + "\n";
            }
            else
            {
                str += RadioButton2.Text + "\n";
            }

            str += Label6.Text + "  " + dateTimePicker1.Value + "\n";

            str += Label7.Text + "  ";

            if (RadioButton3.Checked)
            {
                str += RadioButton3.Text + "\n";
            }
            else
            {
                str += RadioButton4.Text + "\n";
            }

            str += Label8.Text + "  " + ComboBox1.Text + "\n";

            str += Label9.Text + "  ";

            if (CheckBox1.Checked)
            {
                str += CheckBox1.Text + ", ";
            }
            if (CheckBox2.Checked)
            {
                str += CheckBox2.Text + ", ";
            }
            if (CheckBox3.Checked)
            {
                str += CheckBox3.Text + ", ";
            }
            if (CheckBox4.Checked)
            {
                str += CheckBox4.Text + ", ";
            }

            str += "\n";

            str += Label10.Text + "  " + TextBox5.Text + "\n";

            BioData2 f2 = new BioData2(this);
            f2.ShowDialog();
        }

    }
}
