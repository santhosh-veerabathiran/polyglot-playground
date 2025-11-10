Public Class Notepad

    Private Sub NewToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles NewToolStripMenuItem.Click
        RichTextBox1.Clear()
    End Sub

    Private Sub OpenToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles OpenToolStripMenuItem.Click
        OpenFileDialog1.ShowDialog()
        Try
            RichTextBox1.LoadFile(OpenFileDialog1.FileName, RichTextBoxStreamType.PlainText)
        Catch ex As Exception

        End Try
    End Sub

    Private Sub SaveToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SaveToolStripMenuItem.Click
        SaveFileDialog1.ShowDialog()
        Try
            RichTextBox1.SaveFile(SaveFileDialog1.FileName, RichTextBoxStreamType.RichText)
        Catch ex As Exception

        End Try
    End Sub

    Private Sub ExitToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ExitToolStripMenuItem.Click
        Me.Close()
    End Sub

    Private Sub Notepad_FormClosing(ByVal sender As Object, ByVal e As System.Windows.Forms.FormClosingEventArgs) Handles Me.FormClosing
        Dim res As DialogResult

        If RichTextBox1.Text <> "" Then
            res = MessageBox.Show("Do you want to save changes?", "Notepad", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question)

            If res = vbYes Then
                SaveToolStripMenuItem_Click(sender, e)

            ElseIf res = vbCancel Then
                e.Cancel = True
            End If
        End If
    End Sub

    Private Sub CutToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CutToolStripMenuItem.Click
        RichTextBox1.Cut()
    End Sub

    Private Sub CopyToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CopyToolStripMenuItem.Click
        RichTextBox1.Copy()
    End Sub

    Private Sub PasteToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles PasteToolStripMenuItem.Click
        RichTextBox1.Paste()
    End Sub

    Private Sub SelectAllToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SelectAllToolStripMenuItem.Click
        RichTextBox1.SelectAll()
    End Sub

    Private Sub FontToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles FontToolStripMenuItem.Click
        FontDialog1.ShowDialog()
        RichTextBox1.SelectionFont = FontDialog1.Font
    End Sub

    Private Sub ColorToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ColorToolStripMenuItem.Click
        ColorDialog1.ShowDialog()
        RichTextBox1.SelectionColor = ColorDialog1.Color
    End Sub

    Private Sub BoldToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles BoldToolStripMenuItem.Click
        Dim f1 As New Font(RichTextBox1.SelectionFont, FontStyle.Bold)
        RichTextBox1.SelectionFont = f1
    End Sub

    Private Sub ItalicToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ItalicToolStripMenuItem.Click
        Dim f1 As New Font(RichTextBox1.SelectionFont, FontStyle.Italic)
        RichTextBox1.SelectionFont = f1
    End Sub

    Private Sub UnderLineToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles UnderLineToolStripMenuItem.Click
        Dim f1 As New Font(RichTextBox1.SelectionFont, FontStyle.Underline)
        RichTextBox1.SelectionFont = f1
    End Sub

    Private Sub StrikeOutToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles StrikeOutToolStripMenuItem.Click
        Dim f1 As New Font(RichTextBox1.SelectionFont, FontStyle.Strikeout)
        RichTextBox1.SelectionFont = f1
    End Sub

    Private Sub Notepad_SizeChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.SizeChanged
        RichTextBox1.Height = Me.Height - 60
        RichTextBox1.Width = Me.Width - 15
    End Sub

    Private Sub Notepad_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        RichTextBox1.Height = Me.Height - 60
        RichTextBox1.Width = Me.Width - 15
    End Sub
End Class