#include <stdio.h>
#include <stdlib.h>

 char *ft_strlowcase(char *str);

int main(int argc, char **argv) {
	
	char *string = argv[1];

	char *response = ft_strlowcase(string);

	printf("%s", response);
}
