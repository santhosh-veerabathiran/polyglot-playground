Module MatrixAddition
    Sub Main()

        Dim aRow As Integer = 0, aCol As Integer = 0, bRow As Integer = 0, bCol As Integer = 0

        Console.Write("Enter row size of matrix a: ")
        aRow = Convert.ToInt32(Console.ReadLine())

        Console.Write("Enter column size of matrix a: ")
        aCol = Convert.ToInt32(Console.ReadLine())

        Console.Write("Enter row size of matrix b: ")
        bRow = Convert.ToInt32(Console.ReadLine())

        Console.Write("Enter column size of matrix b: ")
        bCol = Convert.ToInt32(Console.ReadLine())

        If aRow = bRow And aCol = bCol Then

            Dim a(aRow - 1, aCol - 1) As Integer
            Dim b(bRow - 1, bCol - 1) As Integer
            Dim c(aRow - 1, aCol - 1) As Integer

            Console.WriteLine("Enter elements of matrix a: ")
            For i = 0 To aRow - 1

                For j = 0 To aCol - 1

                    a(i, j) = Convert.ToInt32(Console.ReadLine())
                Next
            Next

            Console.WriteLine("Enter elements of matrix b: ")
            For i = 0 To bRow - 1

                For j = 0 To bCol - 1

                    b(i, j) = Convert.ToInt32(Console.ReadLine())
                Next
            Next

            For i = 0 To aRow - 1

                For j = 0 To aCol - 1

                    c(i, j) = a(i, j) + b(i, j)
                Next
            Next

            Console.WriteLine("Addition Matrix of a and b:")
            For i = 0 To aRow - 1

                For j = 0 To aCol - 1

                    Console.Write(c(i, j) & " ")
                Next
                Console.WriteLine()
            Next

        Else

            Console.WriteLine("Matrix addition is not possible")
        End If

        Console.ReadKey()

    End Sub
End Module
