#include<iostream>
using namespace std;

int main() {

    int i = 0, size = 0, key = 0, low = 0, mid = 0, high = 0;

    cout<<"Enter array size: ";
    cin>>size;

    int a[size];

    cout<<"Enter array elements: "<<endl;

    for(i = 0; i < size; i++) {

        cin>>a[i];
    }

    cout<<"Enter key element that is to be searched: ";
    cin>>key;

    high = size - 1;

    while(low <= high) {

        mid = (low + high) / 2;

        if(key == a[mid]) {

            cout<<key<<" is found at index: "<<mid;
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

        cout<<key<<" is not found";
    }
    return 0;
}
