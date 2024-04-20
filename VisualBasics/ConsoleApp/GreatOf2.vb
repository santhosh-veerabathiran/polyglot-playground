Module GreatOf2

    Sub Main()

        Dim a As Integer = 0, b As Integer = 0

        Console.WriteLine("Enter two number: ")

        a = Convert.ToInt32(Console.ReadLine())
        b = Convert.ToInt32(Console.ReadLine())

        If a > b Then
            Console.WriteLine(a & " is greater than " & b)
        Else
            Console.WriteLine(b & " is greater than " & a)
        End If

        Console.ReadKey()
    End Sub

End Module
