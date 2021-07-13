#include <stdio.h>
#include <stdlib.h>

 char *ft_strcpy(char *dest, char *src);

int main(int argc, char **argv) {
	
	char *dest = argv[1];
	char *src = argv[2];


	ft_strcpy(dest, src);

	printf("%s", dest);
}
