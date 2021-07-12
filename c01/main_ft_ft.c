#include <stdio.h>
#include <stdlib.h>

 void ft_ft(int *nbr);

int main(int argc, char **argv) {
	
	int x = atoi(argv[1]);
	
	ft_ft(&x);
	printf("%d", x);
}
