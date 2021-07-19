#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int ft_recursive_power(int nb, int power);

int main(int argc, char **argv) {
	
	int num = atoi(argv[1]);
	int pw = atoi(argv[2]);

	printf("%d", ft_recursive_power(num, pw));

	// printf("%d\n", num);
	// printf("%d\n", pw);
}
