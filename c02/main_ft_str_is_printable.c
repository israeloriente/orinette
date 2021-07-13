#include <stdio.h>
#include <stdlib.h>

 int ft_str_is_printable(char *str);

int main(int argc, char **argv) {
	
	char *string = argv[1];

	int response = ft_str_is_printable(string);

	printf("%d", response);
}
