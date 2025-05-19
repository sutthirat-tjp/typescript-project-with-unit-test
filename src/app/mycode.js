"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    // revert collection_1
    var collection_1_minToMax = [];
    for (var i = collection_1.length - 1; i <= 0; i--) {
        collection_1_minToMax.push(collection_1[i]);
    }
    // sort
    var index = 0;
    var index_c1 = 0;
    var index_c2 = 0;
    var index_c3 = 0;
    var mergedLength = collection_1.length + collection_2.length + collection_3.length;
    var mergeAndSorted = [];
    console.log(mergeAndSorted);
    /*while (index <= (mergedLength-1)){
        
        var c1 = index_c1 <= (collection_1.length-1) ? collection_1_minToMax[index_c1] : 0;
        var c2 = index_c2 <= (collection_2.length-1) ? collection_2[index_c2] : 0;
        var c3 = index_c3 <= (collection_3.length-1) ? collection_3[index_c3] : 0;

        var max = findMax(c1,c2,c3);
        if (c1 == max){
            mergeAndSorted.push(c1);
            index_c1++;
        }
        else if (c2 == max){
            mergeAndSorted.push(c2);
            index_c2++;
        }
        else{
            mergeAndSorted.push(c3);
            index_c3++;
        }

        index++;
    }*/
    return mergeAndSorted;
}
function findMax(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            return a;
        }
        else {
            return c;
        }
    }
    else {
        if (b >= c) {
            return b;
        }
        else {
            return c;
        }
    }
}
//merge([3,2,1],[4,5,6],[7,8,9]);
