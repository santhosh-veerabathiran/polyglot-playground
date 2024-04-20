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
    public partial class BioData2 : Form
    {
        public BioData2()
        {
            InitializeComponent();
        }

        private BioData1 f1 = null;
        public BioData2(BioData1 form1)
        {
            f1 = form1;
            InitializeComponent();
        }

        private void BioData2_Load(object sender, EventArgs e)
        {
            RichTextBox1.Text = f1.str;
            f1.str = "";
        }

        private void BioData2_SizeChanged(object sender, EventArgs e)
        {
            RichTextBox1.Height = this.Height;
            RichTextBox1.Width =this.Width;
        }
    }
}
