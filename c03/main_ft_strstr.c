#include <stdio.h>
#include <stdlib.h>

char *ft_strstr(char *str, char *to_find);

int main(int argc, char **argv) {
	
	char *stf = argv[1];
	char *find = argv[2];

	char *resp = ft_strstr(stf, find);

	printf("%s", resp);

	// printf("%s\n", stf);
	// printf("%s\n", find);
}
