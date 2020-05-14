let arr: number[] = [1, 3, 5, 7, 9];
function sum(arr: number[]): number {
    let sum:number = 100;
    arr.forEach(element => {
        sum-= element;
    });
    return sum;
}