#include <stdio.h>
#include <stdlib.h>

 int ft_str_is_uppercase(char *str);

int main(int argc, char **argv) {
	
	char *string = argv[1];

	int response = ft_str_is_uppercase(string);

	printf("%d", response);
}
