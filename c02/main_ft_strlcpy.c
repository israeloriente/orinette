#include <stdio.h>
#include <stdlib.h>

 unsigned int ft_strlcpy(char *dest, char *src, unsigned int size);

int main(int argc, char **argv) {
	
	char *dest = argv[1];
	char *src = argv[2];
	unsigned int nbr = *argv[3] - 48;

	unsigned int response = ft_strlcpy(dest, src, nbr);

	printf("%d", response);
}
