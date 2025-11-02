package array.sort;

import java.util.Scanner;

public class Bubble {

    public static void main(String[] args) {
        int size = 0;

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter array size: ");
        size = scanner.nextInt();

        int[] a = new int[size];

        System.out.println("Enter array elements: ");

        for (int i = 0; i < size; i++) {
            a[i] = scanner.nextInt();
        }

        for (int i = 1; i < size; i++) {

            for (int j = 0; j < size - i; j++) {

                if (a[j] > a[j + 1]) {
                    int temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
        }

        System.out.println("Sorted array: ");
        for (int i = 0; i < size; i++) {
            System.out.print(a[i] + " ");
        }

        scanner.close();
    }
}
