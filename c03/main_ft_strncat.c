#include <stdio.h>
#include <stdlib.h>

char *ft_strncat(char *dest, char *src, unsigned int nb);

int main(int argc, char **argv) {
	
	char *dest = argv[1];
	char *src = argv[2];
	unsigned int i = atoi(argv[3]);

	char *resp = ft_strncat(dest, src, i);

	printf("%s", resp);

	// printf("%s\n", dest);
	// printf("%s\n", src);
	// printf("%d\n", i);
}
