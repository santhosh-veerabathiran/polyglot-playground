#include<iostream>
using namespace std;

int main() {

    int num = 0;

    cout<<"Enter a number: ";
    cin>>num;

    for(int i = 1; i <= num; i++) {

        for(int j = 1; j <= num; j++) {

            if(i == 1 || i == num || j == 1 || j == num) {
                cout<<"* ";
            }
            else {
                cout<<"  ";
            }
        }
        cout<<endl;
    }

    return 0;
}
