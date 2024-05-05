#include<stdio.h>

int main() {

   int a_row = 0, a_col = 0, b_row = 0, b_col = 0;

   printf("Enter row size of matrix a: ");
   scanf("%d", &a_row);

   printf("Enter column size of matrix a: ");
   scanf("%d", &a_col);

   printf("Enter row size of matrix b: ");
   scanf("%d", &b_row);

   printf("Enter column size of matrix b: ");
   scanf("%d", &b_col);

   if(a_col == b_row) {

        int a[a_row][a_col];

        printf("Enter elements of matrix a: \n");
        for(int i = 0; i < a_row; i++) {

            for(int j = 0; j < a_col; j++) {

                scanf("%d", &a[i][j]);
            }
        }

        int b[b_row][b_col];

        printf("Enter elements of matrix b: \n");
        for(int i = 0; i < b_row; i++) {

            for(int j = 0; j < b_col; j++) {

                scanf("%d", &b[i][j]);
            }
        }

        int c[a_row][b_col];

        //Matrix Multiplication Logic
        for(int i = 0; i < a_row; i++) {

            for(int j = 0; j < b_col; j++) {

                c[i][j] = 0;
                for(int k = 0 ; k < a_col; k++) {

                    c[i][j] += (a[i][k] * b[k][j]);
                }
            }
        }

        printf("Product of Matrix a and b:\n");
        for(int i = 0; i < a_row; i++) {

            for(int j = 0; j < b_col; j++) {

                printf("%d ", c[i][j]);
            }
            printf("\n");
        }
   }

   else {
        printf("Matrix multiplication is not possible");
   }

   return 0;
}
