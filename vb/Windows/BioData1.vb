Public Class BioData1

    Public str As String

    Private Sub TextBox1_KeyPress(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyPressEventArgs) Handles TextBox1.KeyPress

        Dim a As Integer = Asc(e.KeyChar)

        If (a >= 65 And a <= 90) Or (a >= 97 And a <= 122) Or (a = 32) Or (a = 8) Or (a = 46) Then
        Else
            e.KeyChar = ""
        End If
    End Sub

    Private Sub TextBox2_KeyPress(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyPressEventArgs) Handles TextBox2.KeyPress

        Dim a As Integer = Asc(e.KeyChar)

        If (a >= 48 And a <= 57) Or (a = 8) Then
        Else
            e.KeyChar = ""
        End If
    End Sub

    Private Sub TextBox3_KeyPress(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyPressEventArgs) Handles TextBox3.KeyPress

        Dim a As Integer = Asc(e.KeyChar)

        If (a >= 48 And a <= 57) Or (a >= 97 And a <= 122) Or (a = 64) Or (a = 8) Or (a = 46) Then
        Else
            e.KeyChar = ""
        End If
    End Sub

    Private Sub TextBox4_KeyPress(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyPressEventArgs) Handles TextBox4.KeyPress

        Dim a As Integer = Asc(e.KeyChar)

        If (a >= 65 And a <= 90) Or (a >= 97 And a <= 122) Or (a = 32) Or (a = 8) Or (a = 46) Then
        Else
            e.KeyChar = ""
        End If
    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click

        str += Label1.Text + "  " + TextBox1.Text + vbCrLf

        str += Label2.Text + "  " + TextBox2.Text + vbCrLf

        str += Label3.Text + "  " + TextBox3.Text + vbCrLf

        str += Label4.Text + "  " + TextBox4.Text + vbCrLf

        str += Label5.Text + "  "

        If RadioButton1.Checked = True Then
            str += RadioButton1.Text + vbCrLf
        Else
            str += RadioButton2.Text + vbCrLf
        End If

        str += Label6.Text + "  " + DateTimePicker1.Value + vbCrLf

        str += Label7.Text + "  "

        If RadioButton3.Checked = True Then
            str += RadioButton3.Text + vbCrLf
        Else
            str += RadioButton4.Text + vbCrLf
        End If

        str += Label8.Text + "  " + ComboBox1.Text + vbCrLf

        str += Label9.Text + "  "

        If CheckBox1.Checked = True Then
            str += CheckBox1.Text + ", "
        End If

        If CheckBox2.Checked = True Then
            str += CheckBox2.Text + ", "
        End If

        If CheckBox3.Checked = True Then
            str += CheckBox3.Text + ", "
        End If

        If CheckBox4.Checked = True Then
            str += CheckBox4.Text + ", "
        End If

        str += vbCrLf

        str += Label10.Text + "  " + TextBox5.Text + vbCrLf

        BioData2.ShowDialog()
    End Sub
End Class
