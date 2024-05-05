#include<iostream>
using namespace std;

int main() {

    int num = 0;

    cout<<"Enter a number: ";
    cin>>num;

    if(num % 2 == 0) {

        num++;
    }

    for(int i = 1; i <= num; i++) {

        for(int j = 1; j <= num; j++) {

            if(j == i || j == num-(i-1)|| j == 1 || j == num) {

                cout<<"* ";
            }
            else if(i == 1 || i == num) {

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
