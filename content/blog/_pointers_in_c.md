+++
author = "Nikhil"
title = "Pointers in C"
date = "2024-02-15"
description = "An overview of pointers in C language. Notes turned to blog."
tags = [
    "programming",
    "c",
]
+++

**What is a Pointer?**

A non-technical explanation would be "A pointer is something that points towards anything." In programming, a pointer does just that – it "points" to the location in the computer's memory where some data is stored. This allows us to indirectly access or modify that data. So basically, a pointer points towards the location of something in the computer's memory.

**Declaring a Pointer**

Below is the syntax to initialize a pointer in C:

```c
datatype *variable_name;
```

For example:

```c
int *addr;
```

**Understanding Memory Addresses**

Before we proceed further, let's quickly understand what memory addresses are. Let's go through an example program:

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
	int m = 5;
	int n = 7;

    printf("value of m -> %d\n", m);
    printf("address of m -> %p\n\n", &m);

    printf("value of n -> %d\n", n);
    printf("address of n -> %p\n", &n);

    int *m_addr;
    int *n_addr;

    printf("\nBefore assigning values to pointers\n\n");

    printf("value of pointer m_addr %p\n", m_addr);
    printf("value of pointer n_addr %p\n", n_addr);

    m_addr = &m;
    n_addr = &n;

    printf("\nAfter assigning values to pointers\n\n");

    printf("value of pointer m_addr %p\n", m_addr);
    printf("value of pointer n_addr %p\n", n_addr);

    return 0;
}
```

In the above program, we have an integer `m` with a value of 5 and `n` with a value of 7. In C, each variable possesses a memory address. When we run this program, we get the following output:

```txt
(value of m -> 5
address of m -> 0x7ffccce8edd0

value of n -> 7
address of n -> 0x7ffccce8edd4)
```

Variable `m` has the memory address `0x7ffccce8edd0`, and for `n`, it's `0x7ffccce8edd4`. An integer is 4 bytes in size, which is why we see a difference of 4 between both memory addresses.

```txt
Before assigning values to pointers

value of pointer m_addr 0x75a158039040
value of pointer n_addr 0x7ffccce8eec0

After assigning values to pointers

value of pointer m_addr 0x7ffccce8edd0
value of pointer n_addr 0x7ffccce8edd4
```
In the C program, we're first declaring the pointers and displaying their addresses. After assigning the address of variables `m` and `n` to them, we print the values. As you can see, before assigning the value, it had a different memory address, and after pointing it to the memory addresses of `m` and `n`, it now shows the addresses of `m` and `n`.

> [!NOTE] Note
> You should never initialize a pointer without assigning a value to it, as it is not a recommended way of using it. You should always initialize it by assigning a value directly, like `int *some_addr = some_var`. Pointers initialized without assigning a value are also called "Wild Pointers."

Let's take another example to see how a pointer functions with different things. 
```c
#include <stdio.h>

int main(int argc, char *argv[])
{
int numbers[] = {1, 2, 3, 4, 5};
int *p = numbers;

printf("Value at p[0]: %d\n", *p);

p++;

printf("Value at p[1]: %d\n", *p);

p++;

printf("Value of p[2]: %d\n", *p);

return 0;
}
```
In this program, we have an array `numbers` containing five numbers from 1 to 5. We initialize a pointer and assign the address value of the first element of the array, then print it. After incrementing `p` and printing again, and repeating the process, the program produces the following output:
```txt
➜  c ./a.out 
Value at p[0]: 1
Value at p[1]: 2
Value of p[2]: 3
```
As you can see, as we initialize the pointer, it holds the data of the array element present at the first index, and as we increment `p`, it moves to the next indexes.

We can also perform "pointer to pointer" initialization:

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
int n = 10;
int *p1 = &n;
int **p2 = &p1;

printf("Value at var: %d\n", n);

printf("Value at ptr1: %d\n", *p1);

printf("Value at ptr2 (double pointer): %d\n", **p2);

return 0;
}
```
So what's happening here, we have an `int` variable `n` with value 10. We then defined a pointer `p1` and assigned address of `n` to it. Then we defined another pointer (double pointer) `p2` and assigned address of `p1` (originally `n`). Which prints the below output
```txt
➜  c ./a.out 
Value at var: 10
Value at ptr1: 10
Value at ptr2 (double pointer): 10
```