const transpose = require('../../../d2/Matrix_Transposition_Pair_Program.js');

const wordSearch = (letters, word) => {
  if (word.length < 1 || letters.length < 1) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  let newLetters = transpose(letters);
  //console.log(newLetters);
  const verticalJoin = newLetters.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;