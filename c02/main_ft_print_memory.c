#include <stdio.h>
#include <stdlib.h>

 void *ft_print_memory(void *addr, unsigned int size);

int main(int argc, char **argv) {
	
	char *addr = argv[1];
	unsigned int size = argv[2];

	ft_print_memory(addr, size);

	printf("%s", addr);
}
