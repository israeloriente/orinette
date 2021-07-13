#include <stdio.h>
#include <stdlib.h>

 char *ft_strncpy(char *dest, char *src, unsigned int n);

int main(int argc, char **argv) {
	
	char *dest = argv[1];
	char *src = argv[2];
	unsigned int nbr = *argv[3] - 48;


	ft_strncpy(dest, src, nbr);

	printf("%s", dest);
}
