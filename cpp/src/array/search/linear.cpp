#include <iostream>

using namespace std;

int main() {
    int i = 0, size = 0, key = 0;

    cout << "Enter array size: ";
    cin >> size;

    int a[size];

    cout << "Enter array elements: " << endl;
    for (i = 0; i < size; i++) {
        cin >> a[i];
    }

    cout << "Enter key element that is to be searched: ";
    cin >> key;

    for (i = 0; i < size; i++) {
        if (a[i] == key) {
            cout << key << " is found at index: " << i;
            break;
        }
    }

    if (i == size) {
        cout << key << " is not found";
    }

    return 0;
}
