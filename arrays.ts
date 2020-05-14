//mxiong version3
const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
const num:number = 2;
function sum(arr: number[]): number {
    let sum:number = 0;
    arr.forEach((element, index) => {
        if(index%2===0){
            sum+=element;
        }else{
            sum-= element;
        }
    });
    return sum + num;
}
