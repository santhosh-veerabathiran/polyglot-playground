#include <iostream>

using namespace std;

int main() {
    int a_row = 0, a_col = 0, b_row = 0, b_col = 0;

    cout << "Enter row size of matrix A: ";
    cin >> a_row;

    cout << "Enter column size of matrix A: ";
    cin >> a_col;

    cout << "Enter row size of matrix B: ";
    cin >> b_row;

    cout << "Enter column size of matrix B: ";
    cin >> b_col;

    if (a_col == b_row) {

        int a[a_row][a_col];

        cout << "Enter elements of matrix A: " << endl;
        for (int i = 0; i < a_row; i++) {

            for (int j = 0; j < a_col; j++) {
                cin >> a[i][j];
            }
        }

        int b[b_row][b_col];

        cout << "Enter elements of matrix B: " << endl;
        for (int i = 0; i < b_row; i++) {

            for (int j = 0; j < b_col; j++) {
                cin >> b[i][j];
            }
        }

        int c[a_row][b_col];

        for (int i = 0; i < a_row; i++) {

            for (int j = 0; j < b_col; j++) {

                c[i][j] = 0;

                for (int k = 0; k < a_col; k++) {
                    c[i][j] += (a[i][k] * b[k][j]);
                }
            }
        }

        cout << "Product of matrix A and B: " << endl;
        for (int i = 0; i < a_row; i++) {

            for (int j = 0; j < b_col; j++) {
                cout << c[i][j] << " ";
            }

            cout << endl;
        }
    } else {
        cout << "Matrix multiplication is not possible because column size of matrix A is not equal to row size of matrix B";
    }

    return 0;
}
