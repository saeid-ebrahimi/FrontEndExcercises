const array = [12,3,7,87,5]
console.log(map(array, square))
function map(arr, func)
{
    for (let idx=0;idx<arr.length; idx++)
    {
        arr[idx] = func(arr[idx])
    }
    return arr
}
function square(num=0)
{
    return num**3
}