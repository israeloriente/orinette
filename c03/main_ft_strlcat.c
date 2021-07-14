#include <stdio.h>
#include <stdlib.h>

unsigned int ft_strlcat(char *dest, char *src, unsigned int size);

int main(int argc, char **argv) {
	
	char *s1 = argv[1];
	char *s2 = argv[2];
	unsigned int i = atoi(argv[3]);

	unsigned int resp = ft_strlcat(s1, s2, i);

	printf("%d", resp);

	// printf("%d", i);
}
