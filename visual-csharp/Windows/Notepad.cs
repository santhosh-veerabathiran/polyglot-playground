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
    public partial class Notepad : Form
    {
        public Notepad()
        {
            InitializeComponent();
        }

        private void NewToolStripMenuItem_Click(object sender, EventArgs e)
        {
            RichTextBox1.Clear();
        }

        private void OpenToolStripMenuItem_Click(object sender, EventArgs e)
        {
            openFileDialog1.ShowDialog();
            try
            {
                RichTextBox1.LoadFile(openFileDialog1.FileName, RichTextBoxStreamType.PlainText);
            }
            catch (Exception ex)
            { 

            }
        }

        private void SaveToolStripMenuItem_Click(object sender, EventArgs e)
        {
            saveFileDialog1.ShowDialog();
            try
            {
                RichTextBox1.SaveFile(saveFileDialog1.FileName, RichTextBoxStreamType.PlainText);
            }
            catch (Exception ex)
            { 
                
            }
        }

        private void ExitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void Notepad_FormClosing(object sender, FormClosingEventArgs e)
        {
            DialogResult res;

            if (RichTextBox1.Text != "")
            {
                res = MessageBox.Show("Do you want to save changes?", "Notepad", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question);

                if (res == DialogResult.Yes)
                { 
                    SaveToolStripMenuItem_Click(sender,e);
                }
                else if (res == DialogResult.Cancel)
                {
                    e.Cancel = true;
                }
            }
        }

        private void CutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            RichTextBox1.Cut();
        }

        private void CopyToolStripMenuItem_Click(object sender, EventArgs e)
        {
            RichTextBox1.Copy();
        }

        private void PasteToolStripMenuItem_Click(object sender, EventArgs e)
        {
            RichTextBox1.Paste();
        }

        private void SelectAllToolStripMenuItem_Click(object sender, EventArgs e)
        {
            RichTextBox1.SelectAll();
        }

        private void FontToolStripMenuItem_Click(object sender, EventArgs e)
        {
            fontDialog1.ShowDialog();
            RichTextBox1.SelectionFont = fontDialog1.Font;
        }

        private void ColorToolStripMenuItem_Click(object sender, EventArgs e)
        {
            colorDialog1.ShowDialog();
            RichTextBox1.SelectionColor = colorDialog1.Color;
        }

        private void BoldToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Font f1 = new Font(RichTextBox1.SelectionFont, FontStyle.Bold);
            RichTextBox1.SelectionFont = f1;
        }

        private void ItalicToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Font f1 = new Font(RichTextBox1.SelectionFont, FontStyle.Italic);
            RichTextBox1.SelectionFont = f1;
        }

        private void UnderLineToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Font f1 = new Font(RichTextBox1.SelectionFont, FontStyle.Underline);
            RichTextBox1.SelectionFont = f1;
        }

        private void StrikeOutToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Font f1 = new Font(RichTextBox1.SelectionFont, FontStyle.Strikeout);
            RichTextBox1.SelectionFont = f1;
        }

        private void Notepad_SizeChanged(object sender, EventArgs e)
        {
            RichTextBox1.Height = this.Height - 65;
            RichTextBox1.Width = this.Width - 15;
        }

        private void Notepad_Load(object sender, EventArgs e)
        {
            RichTextBox1.Height = this.Height - 65;
            RichTextBox1.Width = this.Width - 15;
        }
    }
}
