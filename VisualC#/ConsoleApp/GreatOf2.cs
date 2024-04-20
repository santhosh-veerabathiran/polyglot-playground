using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApp
{
    class GreatOf2
    {
        static void Main(string[] args)
        {
            int num1 = 0, num2 = 0;

            Console.Write("Enter number 1: ");
            num1 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter number 2: ");
            num2 = Convert.ToInt32(Console.ReadLine());

            if (num1 > num2)
            {
                Console.WriteLine(num1 + " is greater than " + num2);
            }
            else
            {
                Console.WriteLine(num2 + " is greater than " + num1);
            }
            Console.ReadKey();
        }
    }
}
