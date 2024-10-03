import { getFileContext } from './utils.js';

function genDiff(filePath1, filePath2) {
  const f1 = getFileContext(filePath1);
  const f2 = getFileContext(filePath2);
  console.log(f1, f2)
}

export default genDiff;