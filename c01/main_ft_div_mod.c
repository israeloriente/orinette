#include <stdio.h>
#include <stdlib.h>

 void ft_div_mod(int a, int b, int *div, int *mod);

int main(int argc, char **argv) {
	
	int a = atoi(argv[1]);
	int b = atoi(argv[2]);

	int divisao = 0;
	int resto = 0;

	int *div = &divisao;
	int *mod = &resto;

	ft_div_mod(a, b, div, mod);

	printf("%d,%d", divisao, resto);
	
}
