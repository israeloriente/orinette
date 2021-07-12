#include <stdio.h>
#include <stdlib.h>

 void ft_ultimate_div_mod(int *a, int *b);

int main(int argc, char **argv) {
	
	int a = atoi(argv[1]);
	int b = atoi(argv[2]);

	int *pa = &a;
	int *pb = &b;

	ft_ultimate_div_mod(pa, pb);

	printf("%d,%d", a, b);
	
}
