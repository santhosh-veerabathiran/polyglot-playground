#include <iostream>

using namespace std;

void swap(int *n1, int *n2) {
    int n3 = 0;

    n3  = *n1;
    *n1 = *n2;
    *n2 = n3;
}

int main() {
    int size = 0;

    cout << "Enter array size: ";
    cin >> size;

    int a[size];

    cout << "Enter array elements: " << endl;
    for (int i = 0; i < size; i++) {
        cin >> a[i];
    }

    for (int i = 0; i < size - 1; i++) {

        int posi = i;

        for (int j = i + 1; j < size; j++) {
            if (a[j] < a[posi]) {
                posi = j;
            }
        }

        swap(&a[i], &a[posi]);
    }

    cout << "Sorted array: ";
    for (int i = 0; i < size; i++) {
        cout << a[i] << " ";
    }

    return 0;
}
