#include <stdio.h>
#include <stdlib.h>

 char *ft_strupcase(char *str);

int main(int argc, char **argv) {
	
	char *string = argv[1];

	char *response = ft_strupcase(string);

	printf("%s", response);
}
