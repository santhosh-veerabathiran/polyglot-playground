#include <cstring>
#include <iostream>
#include <string>

using namespace std;

char *strlwr(char *str) {
    int len = strlen(str);

    for (int i = 0; i < len; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            str[i] = str[i] + 32;
        }
    }

    return str;
}

char *strupr(char *str) {
    int len = strlen(str);

    for (int i = 0; i < len; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            str[i] = str[i] - 32;
        }
    }

    return str;
}

void swap(char *c1, char *c2) {
    char temp = 0;

    temp = *c1;
    *c1  = *c2;
    *c2  = temp;
}

char *strrev(char *str) {
    int len = strlen(str);

    for (int i = 0, j = len - 1; i < j; i++, j--) {
        swap(&str[i], &str[j]);
    }

    return str;
}

int main() {
    char s1[50], s2[50], s3[50];
    int  l1 = 0, l2 = 0, comp = 0;

    cout << "Enter the string 1: ";
    cin.getline(s1, 50);

    cout << "Enter the string 2: ";
    cin.getline(s2, 50);

    cout << "String 1: " << s1 << endl;
    cout << "String 2: " << s2 << endl;

    // Length
    l1 = strlen(s1);
    l2 = strlen(s2);

    cout << "Length of string 1: " << l1 << endl;
    cout << "Length of string 2: " << l2 << endl;

    // Copy
    strcpy(s3, s1);
    cout << "String 3: " << s3 << endl;

    // Concatenation
    strcat(s3, s2);
    cout << "String 3: " << s3 << endl;

    // Compare
    comp = strcmp(s1, s2);
    cout << "Comparison: " << comp << endl;

    // Lowercase
    cout << "Lower string 1: " << strlwr(s1) << endl;

    // Uppercase
    cout << "Upper string 1: " << strupr(s1) << endl;

    // Reverse
    cout << "Reverse string 1: " << strrev(s1) << endl;

    // Substring
    cout << "substring: " << strchr(s3, 'a') << endl;
    cout << "Substring: " << strstr(s3, s2) << endl << endl;

    string str1, str2, str3, str4, str5;
    int    len1 = 0, len2 = 0, cmp = 0, size = 0;

    str1 = string(s3);
    str2 = string(s2);

    cout << "String 1: " << str1 << endl;
    cout << "String 2: " << str2 << endl;

    // Length
    len1 = str1.length();
    len2 = str2.length();

    cout << "Length of string 1: " << len1 << endl;
    cout << "Length of string 2: " << len2 << endl;

    // Copy
    str3 = str1;
    cout << "String 3: " << str3 << endl;

    // Concatenation
    str4 = str1 + str2;
    cout << "String 4: " << str4 << endl;

    str4.append(str1);
    cout << "String 4: " << str4 << endl;

    str4.append(str1, 2, 5);
    cout << "String 4: " << str4 << endl;

    str4.append(str1.begin() + 5, str1.end());
    cout << "String 4: " << str4 << endl;

    str4.append("Virat Kohli");
    cout << "String 4: " << str4 << endl;

    str4.append("Thala Dhoni", 5);
    cout << "String 4: " << str4 << endl;

    str4.append(5, '@');
    cout << "String 4: " << str4 << endl;

    // Compare
    cmp = str1.compare(str2);
    cout << "Comparison: " << cmp << endl;

    // Substring
    str5 = str1.substr(3, len1);
    cout << "String 5: " << str5 << endl;

    // Swap
    str1.swap(str2);
    cout << "String 1: " << str1 << endl;
    cout << "String 2: " << str2 << endl;

    // Size
    size = str1.size();
    cout << "Size of  string 1: " << size << endl;

    // Resize
    str1.resize(5);
    cout << "String 1: " << str1 << endl;

    str1.resize(size + 5, '@');
    cout << "String 1: " << str1 << endl;

    // Replace
    str1.replace(2, 5, "-----");
    cout << "String 1: " << str1 << endl;

    str1.replace(4, 4, str2, 0, 4);
    cout << "String 1: " << str1 << endl;

    // At
    cout << "Character at index 3 in String 1; " << str1.at(3) << endl;

    // Find
    cout << "Position of 'la' in string 1: " << str1.find("la") << endl;
    cout << "Position of '--' in string 1: " << str1.find("--", 2) << endl;

    // Find first of
    cout << "Position of 'a' in string 1: " << str1.find_first_of("a") << endl;

    // Find last of
    cout << "Position of 'a' in string 1: " << str1.find_last_of("a") << endl;

    // Find first not of
    cout << "Position of 'a' in string 1: " << str1.find_first_not_of("a") << endl;

    // Find last not of
    cout << "Position of 'a' in string 1: " << str1.find_last_not_of("a") << endl;

    return 0;
}
