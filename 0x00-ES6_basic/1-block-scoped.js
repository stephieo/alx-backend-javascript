#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    return [task2, task];
  }
  return [task, task2];
}
