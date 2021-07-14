#include <stdio.h>
#include <stdlib.h>

 int ft_strcmp(char *s1, char *s2);

int main(int argc, char **argv) {
	
	char *s1 = argv[1];
	char *s2 = argv[2];

	int resp = ft_strcmp(s1, s2);

	printf("%d", resp);

	// printf("%s\n", s1);
	// printf("%s\n", s2);
}
