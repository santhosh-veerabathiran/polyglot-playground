#include <stdio.h>

int main() {
    int a_row = 0, a_col = 0, b_row = 0, b_col = 0;

    printf("Enter row size of matrix A: ");
    scanf("%d", &a_row);

    printf("Enter column size of matrix A: ");
    scanf("%d", &a_col);

    printf("Enter row size of matrix B: ");
    scanf("%d", &b_row);

    printf("Enter column size of matrix B: ");
    scanf("%d", &b_col);

    if (a_col == b_row) {

        int a[a_row][a_col];

        printf("Enter elements of matrix A: \n");
        for (int i = 0; i < a_row; i++) {

            for (int j = 0; j < a_col; j++) {
                scanf("%d", &a[i][j]);
            }
        }

        int b[b_row][b_col];

        printf("Enter elements of matrix B: \n");
        for (int i = 0; i < b_row; i++) {

            for (int j = 0; j < b_col; j++) {
                scanf("%d", &b[i][j]);
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

        printf("Product of matrix A and B:\n");
        for (int i = 0; i < a_row; i++) {

            for (int j = 0; j < b_col; j++) {

                printf("%d ", c[i][j]);
            }
            printf("\n");
        }
    } else {
        printf("Matrix multiplication is not possible because column size of matrix A is not equal to row size of matrix B");
    }

    return 0;
}
