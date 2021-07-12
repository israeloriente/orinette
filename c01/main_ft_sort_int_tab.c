#include <stdio.h>
#include <stdlib.h>

 void ft_sort_int_tab(int *tab, int size);

int main(int argc, char **argv) {

	int array[] = {2,5,7,4,36,8,9};
	int *ponteiro = array;
	int size = 7;

	ft_sort_int_tab(ponteiro, size);

	while(*ponteiro) {
		printf("%d", *ponteiro);
		ponteiro++;
	}
	
}
