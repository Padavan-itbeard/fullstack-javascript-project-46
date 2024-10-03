import { cwd } from 'node:process';
import path from 'node:path';
import fs from 'node:fs';

function parsePath(filePath) {
  const currWorkDir = cwd();
  const absPath = path.resolve(currWorkDir, filePath);

  return path.parse(absPath);
}

function readFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return content;
};

function parseJson(json) {
  return JSON.parse(json);
}

function getFileContext(filePath) {
  let context;
  const pathInfo = parsePath(filePath);
  const file = readFile(path.resolve(pathInfo.dir, pathInfo.base));

  if (pathInfo.ext === '.json') {
    context = parseJson(file);
  }

  return context;
}

export { readFile, parseJson, parsePath, getFileContext };