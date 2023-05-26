export default function guardrail(mathFunction) {
  const queuq = [];
  const string  = 'Guardrail was processed';
  try {
    const value = mathFunction()
    queue.push(value, string);
  } catch (err) {
    queue.push(`Error: ${err.message}`, tring);
  }
  return queue;
}
