let arr: number[] = [1, 3, 5, 7, 9];
//master version2
function sum(arr: number[]): number {
    let sum:number = 100;
    let info:number = 2
    arr.forEach(e => {
        sum-= e;
        info+= e;
    });
    return sum+info;
}
