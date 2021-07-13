#include <stdio.h>
#include <stdlib.h>

 char *ft_strcapitalize(char *str);

int main(int argc, char **argv) {
	
	char *string = argv[1];

	char *response = ft_strcapitalize(string);

	printf("%s", response);
}
