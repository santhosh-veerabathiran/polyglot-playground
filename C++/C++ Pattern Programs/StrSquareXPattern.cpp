#include<iostream>
using namespace std;

int main() {

    string str = "";

    cout<<"Enter a string: ";
    cin>>str;

    int len = str.length();

    if(len % 2 == 0) {

        str += " ";
        len++;
    }

    for(int i = 1; i <= len; i++) {

        for(int j = 1; j <= len; j++) {

            if(j == i || j == len-(i-1)|| j == 1 || j == len) {

                cout<<str[i-1]<<" ";
            }
            else if(i == 1 || i == len) {

                cout<<str[j-1]<<" ";
            }
            else {

                cout<<"  ";
            }
        }
        cout<<endl;
    }

    return 0;
}
