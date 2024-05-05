#include<stdio.h>

int main() {

    int n = 0;

    cout<<"Enter a number: ";
    cin>>n;

    for(int i = 1; i <= n; i++) {

        for(int j = 1; j <= (2*n) - 1; j++) {

            if(i == 1 && j == n || i == n){

                cout<<"* ";
            }
            else if(j == n - i + 1 || j == n + i - 1) {

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
