import java.util.Scanner;
import java.util.Arrays;

public class BinarySearch {

	public static void main(String[] args) {
		int i = 0, size = 0, key = 0, low = 0, mid = 0, high = 0;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter array size: ");
		size = sc.nextInt();
		
		int[] a = new int[size];
		
		System.out.println("Enter array elements: ");
		
		for(i = 0; i < size; i++) {
			
			a[i] = sc.nextInt();
		}
		
		Arrays.sort(a);
		
		System.out.print("Sorted Array: ");
		
		for(i = 0; i < size; i++) {
			
			System.out.print(a[i] + " ");
		}
		
		System.out.println();
		
		System.out.print("Enter key element that is to be searched: ");
		key = sc.nextInt();
		
		high = size - 1;
		
		while(low <= high) {

	        mid = (low + high) / 2;

	        if(key == a[mid]) {

	            System.out.println(key + " is found at index: " + mid);
	            break;
	        }
	        else if(key > a[mid]) {

	            low = mid + 1;
	        }
	        else {

	            high = mid - 1;
	        }
	    }

	    if(low > high) {

	        System.out.println(key + " is not found");
	    }
	    sc.close();
	}

}
