#include<stdio.h>

int CountSpecificNumbers(int m, int n) {
    if (m > n) {
        return -1;
    }

    int c = 0;

    for(int i = m; i <= n; i++) {
        int flag = 1, num = i;
        while(num > 0) {
            int r = num % 10;
            num /= 10;
            if (r == 1 || r == 4 || r == 9) {
                continue;
            }
            else {
                flag = 0;
                break;
            }
        }
        if(flag) {
            c += 1;
        }
    }

    return c;
}

int main() {
    int m = 0,n = 0;

    printf("Enter m value: ");
    scanf("%d",&m);

    printf("Enter n value: ");
    scanf("%d",&n);

    int c = CountSpecificNumbers(m,n);
    printf("%d",c);

    return 0;
}
