#include <stdio.h>
#include <stdlib.h>

 int ft_str_is_numeric(char *str);

int main(int argc, char **argv) {
	
	char *string = argv[1];

	int response = ft_str_is_numeric(string);

	printf("%d", response);
}
