#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int ft_iterative_factorial(int nb);

int main(int argc, char **argv) {
	
	int res = atoi(argv[1]);

	printf("%d", ft_iterative_factorial(res));

	// printf("%d\n", res);
	// printf("%s\n", src);
}
