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

    for (int i = 1; i < size; i++) {

        for (int j = 0; j < size - i; j++) {
            if (a[j] > a[j + 1]) {
                swap(&a[j], &a[j + 1]);
            }
        }
    }

    cout << "Sorted array: ";
    for (int i = 0; i < size; i++) {
        cout << a[i] << " ";
    }

    return 0;
}
