package number;

import java.util.Scanner;

public class MinMax {

    public static void main(String[] args) {
        int size = 0, min = 0, max = 0;

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter array size: ");
        size = scanner.nextInt();

        int[] arr = new int[size];

        System.out.println("Enter array elements: ");
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }

        min = max = arr[0];

        for (int i = 0; i < size; i++) {

            if (min > arr[i]) {
                min = arr[i];
            } else if (max < arr[i]) {
                max = arr[i];
            }
        }

        System.out.println("Minimum: " + min);
        System.out.println("Maximum: " + max);

        scanner.close();
    }
}
