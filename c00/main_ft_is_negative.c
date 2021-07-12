#include <stdio.h>

 void ft_is_negative(int n);

int main(int argc, char **argv) {
	*argv[1] -= 48;
	ft_is_negative(*argv[1]);
}
