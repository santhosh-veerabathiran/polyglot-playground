Imports System.Data.OleDb

Public Class OLEDBStudentTable

    Dim con As New OleDbConnection("Provider=Microsoft.ACE.OLEDB.12.0;Data Source=D:\Program Files\Visual Basics\WindowsApp\MyDataBase1.accdb")

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim s As String = "Insert into Student(StuID, StuName, Gender, Age) values(@a, @b, @c, @d);"

        Dim cmd As New OleDbCommand(s, con)

        cmd.Parameters.AddWithValue("a", TextBox1.Text)
        cmd.Parameters.AddWithValue("b", TextBox2.Text)
        cmd.Parameters.AddWithValue("c", TextBox3.Text)
        cmd.Parameters.AddWithValue("d", TextBox4.Text)

        con.Open()

        Dim c As Integer = cmd.ExecuteNonQuery()
        Dim str As String = Convert.ToString(c)

        con.Close()

        MessageBox.Show(str + " rows inserted")
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        Dim s As String = "Update Student set StuName = @b, Gender = @c, Age = @d where StuID = @a;"

        Dim cmd As New OleDbCommand(s, con)

        cmd.Parameters.AddWithValue("a", TextBox1.Text)
        cmd.Parameters.AddWithValue("b", TextBox2.Text)
        cmd.Parameters.AddWithValue("c", TextBox3.Text)
        cmd.Parameters.AddWithValue("d", TextBox4.Text)

        MessageBox.Show(cmd.ToString())

        con.Open()

        Dim c As Integer = cmd.ExecuteNonQuery()
        Dim str As String = Convert.ToString(c)

        con.Close()

        MessageBox.Show(str + " rows updated")
    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click
        Dim s As String = "Delete from Student where StuID = @a;"

        Dim cmd As New OleDbCommand(s, con)

        cmd.Parameters.AddWithValue("a", TextBox1.Text)

        con.Open()

        Dim c As Integer = cmd.ExecuteNonQuery()
        Dim str As String = Convert.ToString(c)

        con.Close()

        MessageBox.Show(str + " rows deleted")
    End Sub

    Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click
        Dim s As String = "Select * from Student where StuID = @a;"

        Dim cmd As New OleDbCommand(s, con)

        cmd.Parameters.AddWithValue("a", TextBox1.Text)

        con.Open()

        Dim r As OleDbDataReader = cmd.ExecuteReader()

        If r.Read() Then
            TextBox2.Text = r.GetString(1)
            TextBox3.Text = r.GetString(2)
            TextBox4.Text = r.GetValue(3)

            MessageBox.Show("Selected")
        Else
            MessageBox.Show("Record not found")
        End If

        con.Close()
    End Sub

    Private Sub Button5_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button5.Click
        Dim s As String = "Select * from Student;"

        Dim cmd As New OleDbCommand(s, con)

        con.Open()

        Dim r As OleDbDataReader = cmd.ExecuteReader()

        While r.Read()
            TextBox1.Text = r.GetValue(0)
            TextBox2.Text = r.GetString(1)
            TextBox3.Text = r.GetString(2)
            TextBox4.Text = r.GetValue(3)

            MessageBox.Show("Next")
        End While

        con.Close()

        MessageBox.Show("Finished")
    End Sub
End Class