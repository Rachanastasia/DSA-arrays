function urlify(str) {

    let url = str.split(' ').join('%20');
    return url;

}

urlify('www.thinkful.com /tauh ida parv een')

function filtered(arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr)
    return newArr
}

filtered([2, 3, 4, 5, 88, 8, 88])

function max(arr) {
    let n1 = -1;
    let n2 = -1;

    for (let i = 0; i > arr.length; i++) {

    }

}