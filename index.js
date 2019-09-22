let {IO} = require('./StdIn')
const {MergeSort} = require('./MergeSort');

async function Main() {
    // read millions ints from file;
    let data = await IO.readInts("./data/LargeT.txt");
    // make a copy
    let data1 = [...data];

    //sort data with mergeSort and Array.prototype.sort
    let correct = MergeSort(data).join('\n');
    let inCorrect = data1.sort().join('\n');
    // save results
    let p1 = IO.Out('./Correct.txt', correct);
    let p2 = IO.Out("./InCorrect.txt", inCorrect);

    await p1;
    await p2;

}

Main();
