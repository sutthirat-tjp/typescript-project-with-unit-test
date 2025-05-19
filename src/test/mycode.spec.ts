import { merge } from '../app/mycode';

const data_test = [
  { case: 1,
    name: 'เลขต่อกัน',
    collection_1: [3,2,1],
    collection_2: [4,5,6],
    collection_3: [7,8,9],
    expected: [1,2,3,4,5,6,7,8,9]
  },
  { case: 2,
    name: 'เลขซ้ำ',
    collection_1: [3,2,2],
    collection_2: [1,2,2],
    collection_3: [1,1,1],
    expected: [1,1,1,1,2,2,2,2,3]
  },
  { case: 3,
    name: 'ขนาด input ไม่เท่ากัน',
    collection_1: [5],
    collection_2: [3,4],
    collection_3: [1,2,9],
    expected: [1,2,3,4,5,9]
  },
  { case: 4,
    name: 'เลขแทรกกัน',
    collection_1: [9,5,1],
    collection_2: [2,4,8],
    collection_3: [3,6,7,10],
    expected: [1,2,3,4,5,6,7,8,9,10]
  },
  { case: 5,
    name: 'สมาชิก 1',
    collection_1: [1],
    collection_2: [2],
    collection_3: [3],
    expected: [1,2,3]
  }
]
describe('merge()', () => {
  data_test.forEach(testData => {
    it(`case ${testData.case} : ${testData.name}`, () => {
      const collection_1 = testData.collection_1;
      const collection_2 = testData.collection_2;
      const collection_3 = testData.collection_3;
      const expectedResult = testData.expected;

      expect(merge(collection_1,collection_2,collection_3)).toEqual(expectedResult);
    });
  });
  
});