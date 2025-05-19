export function merge(collection_1: number[], collection_2: number[], collection_3: number[]) : number[] {
    
    const collection_1_length = collection_1.length;
    const collection_2_length = collection_2.length;
    const collection_3_length = collection_3.length;

    // revert collection_1
    var collection_1_minToMax: number[] = [];
    for(let i = collection_1_length-1; i >= 0; i--){
        collection_1_minToMax.push(collection_1[i]);
    }
    // sort
    var index = 0;
    var index_c1 = 0;
    var index_c2 = 0;
    var index_c3 = 0;
    var mergedLength = collection_1_length + collection_2_length + collection_3_length;
    var mergeAndSorted: number[] = [];
    var maximumValue = findMax(collection_1_minToMax[collection_1_length-1], collection_2[collection_2_length-1], collection_3[collection_3_length-1]);
    var max = maximumValue + 1;
    while (index <= mergedLength-1){
        
        var c1 = index_c1 <= (collection_1.length-1) ? collection_1_minToMax[index_c1] : max;
        var c2 = index_c2 <= (collection_2.length-1) ? collection_2[index_c2] : max;
        var c3 = index_c3 <= (collection_3.length-1) ? collection_3[index_c3] : max;

        var min = findMin(c1,c2,c3);
        if (c1 == min){
            mergeAndSorted.push(c1);
            index_c1++;
        }
        else if (c2 == min){
            mergeAndSorted.push(c2);
            index_c2++;
        }
        else{
            mergeAndSorted.push(c3);
            index_c3++;
        }

        index++;
        
    }
    return mergeAndSorted;

}

function findMin(a: number, b: number, c: number){
    if(a <= b){
        if(a <= c){
            return a;
        }
        else{
            return c;
        }
    }
    else{
        if(b <= c){
            return b;
        }
        else{
            return c;
        }
    }
}
function findMax(a: number, b: number, c: number){
    if(a >= b){
        if(a >= c){
            return a;
        }
        else{
            return c;
        }
    }
    else{
        if(b >= c){
            return b;
        }
        else{
            return c;
        }
    }
}
