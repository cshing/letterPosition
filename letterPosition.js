function countLetters(strArray){
    var returnObj = {};
    var noSpaces = strArray.join('').split(' ').join('');

      for (var x = 0; x < noSpaces.length; x++){
        if (returnObj[noSpaces.charAt(x)] === undefined){
          returnObj[noSpaces.charAt(x)] = {count: 1, indice: [x]};
        }else{
          returnObj[noSpaces.charAt(x)].count += 1;
          returnObj[noSpaces.charAt(x)].indice.push(x);
        }
      }

    return returnObj;
  }
  console.log(countLetters(["lighthouse in the house"]))

  //console.log(countLetters(process.argv.slice(2)));

//  {
//  l: {count: 0, indices: [1, 3, 5]}
// }

