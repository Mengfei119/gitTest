const arr: number[] = [1, 2, 3, 4, 5];
function sum(arr: number[]): number {
    let sum:number = 0;
    arr.forEach(element => {
        sum+= element;
    });
    return sum;
}