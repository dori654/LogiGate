#include <stdio.h>


int main(){
    
    return 0;
}

int bubblesort(int *array, int size){
    int i, j, temp;
    for(i = 0; i < size; i++){
        for(j = 0; j < size - 1; j++){
            if(array[j] > array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return 0;
}

void calculateAvarage(int *array, int size){
    int i, sum = 0;
    for(i = 0; i < size; i++){
        sum += array[i];
    }
    printf("Avarage: %d\n", sum/size);
}