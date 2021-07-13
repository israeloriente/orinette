#include <stdio.h>
#include <stdlib.h>

 int ft_str_is_lowercase(char *str);

int main(int argc, char **argv) {
	
	char *string = argv[1];

	int response = ft_str_is_lowercase(string);

	printf("%d", response);
}
