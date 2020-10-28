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


    return newArr
}

filtered([2, 3, 4, 5, 88, 8, 88])

function max(arr) {
    let n1 = 0;
    let n2 = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= n1) {
            n2 = n1;
            n1 = arr[i];
        } else if (arr[i] >= n2) {
            n2 = arr[i]
        }

    }
    return n1 + n2;

}
max([2, 3, 4, 5, 88, 8])



function merge(arr1, arr2) {
    let len = arr1.length > arr2.length ? arr1.length : arr2.length;

    let newArr = [];

    for (let i = 0; i < len; i++) {
        if (arr1[i] <= arr2[i]) {
            newArr.push(arr1[i])
            arr1[i] = 0;
        }

        newArr.push(arr2[i])
        newArr.push(arr1[i])

    }
    return newArr;
}

merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])

function removeChar(str, chars) {
    let s = str;
    let newStr = '';
    let match = false;
    for (let i = 0; i < str.length; i++) {
        match = false;
        if (!match) {
            for (let j = 0; j < chars.length; j++) {

                if (s[i] === chars[j]) {
                    match = true;
                }

            }
        }

        if (!match) {
            newStr += str[i]
        }

    }
    console.log(newStr)
    return newStr;

}

removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')

function twodArr(arr) {
    let newArr = arr;
    let nx = false;
    let ny = null;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] === 0 && !nx) {
                nx = true
                ny = j;
                console.log(ny)
                j = 0;
            }
            if (nx) {
                arr[i][j] = 0;
            }
            if (arr[i][j] === arr[i][ny]) {
                arr[i][j] = 0;
            }
            //

            // if (i > 1 && arr[i - 1][j] === 0) {
            //     arr[i][j] = 0;

            // }



        }
        nx = false;


    }

    // newArr.forEach(a => {
    //     a.forEach(num => {
    //         if (num === 0) {
    //             nx = true
    //             ny = true;
    //         }
    //         num = 0;

    //     })
    //     nx = false;

    // })
    console.log(newArr)
    return newArr;

}

twodArr(
    [[1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]]
)