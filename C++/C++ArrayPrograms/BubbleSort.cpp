#include<iostream>
using namespace std;

int main() {

    int size = 0;

    cout<<"Enter array size: ";
    cin>>size;

    int a[size];

    cout<<"Enter array elements: "<<endl;

    for(int i = 0; i < size; i++) {

        cin>>a[i];
    }

    for(int i = 1; i < size; i++) {

        for(int j = 0; j < size - i; j++) {

            if(a[j] > a[j + 1]) {

                int n = a[j];
                a[j] = a[j + 1];
                a[j + 1] = n;
            }
        }
    }

    cout<<"Sorted array: ";

    for(int i = 0; i < size; i++) {

        cout<<a[i]<<" ";
    }

    return 0;
}
