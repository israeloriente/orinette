#include <stdio.h>
#include <stdlib.h>

 void ft_swap(int *a, int *b);

int main(int argc, char **argv) {
	
	int a = atoi(argv[1]);
	int b = atoi(argv[2]);

	int *pa = &a;
	int *pb = &b;

	ft_swap(pa, pb);

	printf("%d", a);
	printf("%d", b);
	
}
