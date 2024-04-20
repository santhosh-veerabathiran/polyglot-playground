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

    for(int i = 0; i < size - 1; i++) {

        int posi = i;

        for(int j = i + 1; j < size; j++) {

            if(a[j] < a[posi]) {

                posi = j;
            }
        }

        int n = a[i];
        a[i] = a[posi];
        a[posi] = n;
    }

    cout<<"Sorted array: ";

    for(int i = 0; i < size; i++) {

        cout<<a[i]<<" ";
    }

    return 0;
}
