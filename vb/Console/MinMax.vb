Module MinMax
    Sub Main()
        Dim size, min, max As Integer

        Console.Write("Enter array size: ")
        size = Convert.ToInt32(Console.ReadLine())

        Dim arr() As Integer = New Integer(size - 1) {}

        Console.WriteLine("Enter array elements: ")
        For i As Integer = 0 To size - 1

            arr(i) = Convert.ToInt32(Console.ReadLine())
        Next

        min = arr(0)
        max = arr(0)

        For i As Integer = 0 To size - 1

            If min > arr(i) Then
                min = arr(i)
            ElseIf max < arr(i) Then
                max = arr(i)
            End If
        Next

        Console.WriteLine("Minimum: " & min)
        Console.WriteLine("Maximum: " & max)

        Console.ReadKey()
    End Sub
End Module
