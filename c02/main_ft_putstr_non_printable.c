#include <stdio.h>
#include <stdlib.h>

void ft_putstr_non_printable(char *str);

int main(int argc, char **argv) {
	
	char *string = argv[1];

	ft_putstr_non_printable(string);

	printf("%s", string);
}
