#include <iostream>
#include <stdlib.h>
#include <time.h>
#include <unistd.h>

using namespace std;

void otp_generator(int n) {
    string str = "0123456789", otp;

    int len = str.length();
    int j;

    srand(time(0));

    for (int i = 1; i <= n; i++) {
        int j  = rand() % len;
        otp[i] = str[j];
    }

    cout << "OTP: ";
    for (int i = 1; i <= n; i++) {
        cout << otp[i];
    }
    cout << endl;

    cout << "OTP will expire in 5 seconds....." << endl;
    sleep(5);

    cout << "Oops OTP is expired!!" << endl << endl;

    int choice;

    cout << "press 1 for new OTP generation" << endl;
    cout << "press 2 for exit" << endl << endl;
    cin >> choice;

    switch (choice) {
    case 1:
        system("CLS");
        otp_generator(n);
        break;

    default:
        exit(0);
    }
}

int main() {
    int n;
    cout << "Enter length: ";
    cin >> n;

    otp_generator(n);

    return 0;
}
