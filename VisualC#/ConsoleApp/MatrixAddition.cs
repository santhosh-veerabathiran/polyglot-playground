using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApp
{
    class MatrixAddition
    {
        static void Main(string[] args)
        {
            int a_row = 0, a_col = 0, b_row = 0, b_col = 0;

            Console.Write("Enter row size of matrix a: ");
            a_row = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter column size of matrix a: ");
            a_col = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter row size of matrix b: ");
            b_row = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter column size of matrix b: ");
            b_col = Convert.ToInt32(Console.ReadLine());

            if (a_row == b_row && a_col==b_col)
            {
                int[,] a = new int[a_row, a_col];
                int[,] b = new int[b_row, b_col];
                int[,] c = new int[a_row, a_col];
                
                Console.WriteLine("Enter elements of matrix a: ");
                for (int i = 0; i < a_row; i++)
                {
                    for (int j = 0; j < a_col; j++)
                    {
                        a[i,j] = Convert.ToInt32(Console.ReadLine());
                    }
                }

                Console.WriteLine("Enter elements of matrix b: ");
                for (int i = 0; i < b_row; i++)
                {
                    for (int j = 0; j < b_col; j++)
                    {
                        b[i, j] = Convert.ToInt32(Console.ReadLine());
                    }
                }

                //Logic
                for (int i = 0; i < a_row; i++)
                {
                    for (int j = 0; j < a_col; j++)
                    {
                        c[i, j] = a[i,j] + b[i,j];
                    }
                }

                Console.WriteLine("Addition matrix of a and b: ");
                for (int i = 0; i < a_row; i++)
                {
                    for (int j = 0; j < a_col; j++)
                    {
                        Console.Write(c[i, j] + " ");
                    }
                    Console.WriteLine();
                }
            }
            else
            {
                Console.WriteLine("Matrix addition is not possible");
            }
            Console.ReadKey();
        }
    }
}
