#include <iostream>

using namespace std;

int main() {
    int i = 0, j = 0, size = 0;

    cout << "Enter array size: ";
    cin >> size;

    int a[size];

    cout << "Enter array elements: " << endl;
    for (int i = 0; i < size; i++) {
        cin >> a[i];
    }

    for (i = 1; i < size; i++) {

        int n = a[i];

        for (j = i; j > 0 && a[j - 1] > n; j--) {
            a[j] = a[j - 1];
        }

        a[j] = n;
    }

    cout << "Sorted array: ";
    for (int i = 0; i < size; i++) {
        cout << a[i] << " ";
    }

    return 0;
}
