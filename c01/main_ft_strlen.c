#include <stdio.h>
#include <stdlib.h>

 int ft_strlen(char *str);

int main(int argc, char **argv) {

	char *ponteiro = argv[1];

	int result = ft_strlen(ponteiro);

	printf("%d", result);
	
}
