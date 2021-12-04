const getRandomArray = (length, maxVal) => {
    let arr = [];
    while (arr.length < length) {
      var r = Math.floor(Math.random() * maxVal) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  };
  
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);
  
  const randomizeSample = (length, maxVal) => {
    const arr = getRandomArray(length, maxVal);
    const ObjArr1 = arr.map((el) => ({
      index: el,
      partition: 0,
      flipped: false,
      solved: false
    }));
    const ObjArr2 = arr.map((el) => ({
      index: el,
      partition: 1,
      flipped: false,
      solved: false
    }));
    const newArr = ObjArr1.concat(ObjArr2);
    const shuffledArr = shuffle(newArr);
    //console.log(shuffledArr[0]['index'])
    return shuffledArr
  };
  
export default randomizeSample
  