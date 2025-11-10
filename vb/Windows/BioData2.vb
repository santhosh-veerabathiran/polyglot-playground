Public Class BioData2

    Private Sub BioData2_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        RichTextBox1.Text = BioData1.str
        BioData1.str = ""
    End Sub

    Private Sub BioData2_SizeChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.SizeChanged
        RichTextBox1.Height = Me.Height
        RichTextBox1.Width = Me.Width
    End Sub
End Class
