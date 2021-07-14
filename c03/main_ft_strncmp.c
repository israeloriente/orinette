#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int ft_strncmp(char *s1, char *s2, unsigned int n);

int main(int argc, char **argv) {
	
	char *s1 = argv[1];
	char *s2 = argv[2];
	unsigned int i = atoi(argv[3]);

	int resp = ft_strncmp(s1, s2, i);

	printf("%d", resp);

// 	printf("%s\n", s1);
// 	printf("%s\n", s2);
// 	printf("%d\n", i);
}
