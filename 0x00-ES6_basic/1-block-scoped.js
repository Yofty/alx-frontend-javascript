export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-nex-line
    const task = true;
    // eslint-disable-next-line
    const task2 = false;
  }

  return [task, task2];
}
