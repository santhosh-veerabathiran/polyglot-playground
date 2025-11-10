using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApp
{
    class MinMax
    {
        static void Main(String[] args)
        {
            int size = 0, min = 0, max = 0;

            Console.Write("Enter array size: ");
            size = Convert.ToInt32(Console.ReadLine());

            int[] arr = new int[size];

            Console.WriteLine("Enter array elements: ");
            for (int i = 0; i < size; i++)
            {
                arr[i] = Convert.ToInt32(Console.ReadLine());
            }

            min = max = arr[0];

            for (int i = 0; i < size; i++)
            {
                if (min > arr[i])
                {
                    min = arr[i];
                }
                else if (max < arr[i])
                {
                    max = arr[i];
                }
            }

            Console.WriteLine("Minimum: " + min);
            Console.WriteLine("Maximum: " + max);

            Console.ReadKey();
        }
    }
}
