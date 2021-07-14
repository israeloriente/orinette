#include <stdio.h>
#include <stdlib.h>

char *ft_strcat(char *dest, char *src);

int main(int argc, char **argv) {
	
	char *dest = argv[1];
	char *src = argv[2];

	char *resp = ft_strcat(dest, src);

	printf("%s", resp);

	// printf("%s\n", dest);
	// printf("%s\n", src);
}
