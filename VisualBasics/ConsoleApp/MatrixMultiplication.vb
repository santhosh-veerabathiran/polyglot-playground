Module MatrixMultiplication
    Sub Main()

        Dim a_row As Integer = 0, a_col As Integer = 0, b_row As Integer = 0, b_col As Integer = 0

        Console.Write("Enter row size of matrix a: ")
        a_row = Convert.ToInt32(Console.ReadLine())

        Console.Write("Enter column size of matrix a: ")
        a_col = Convert.ToInt32(Console.ReadLine())

        Console.Write("Enter row size of matrix b: ")
        b_row = Convert.ToInt32(Console.ReadLine())

        Console.Write("Enter column size of matrix b: ")
        b_col = Convert.ToInt32(Console.ReadLine())

        If a_col = b_row Then

            Dim a(a_row - 1, a_col - 1) As Integer
            Dim b(b_row - 1, b_col - 1) As Integer
            Dim c(a_row - 1, b_col - 1) As Integer

            Console.WriteLine("Enter elements of matrix a: ")
            For i = 0 To a_row - 1

                For j = 0 To a_col - 1

                    a(i, j) = Convert.ToInt32(Console.ReadLine())
                Next
            Next

            Console.WriteLine("Enter elements of matrix b: ")
            For i = 0 To b_row - 1

                For j = 0 To b_col - 1

                    b(i, j) = Convert.ToInt32(Console.ReadLine())
                Next
            Next

            For i = 0 To a_row - 1

                For j = 0 To b_col - 1

                    For k = 0 To a_col - 1

                        c(i, j) += a(i, k) * b(k, j)
                    Next
                Next
            Next

            Console.WriteLine("Multiplication Matrix of a and b:")
            For i = 0 To a_row - 1

                For j = 0 To b_col - 1

                    Console.Write(c(i, j) & " ")
                Next
                Console.WriteLine()
            Next

        Else

            Console.WriteLine("Matrix multiplication is not possible")
        End If

        Console.ReadKey()

    End Sub
End Module
