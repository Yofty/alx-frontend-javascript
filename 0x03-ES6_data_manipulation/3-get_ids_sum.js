export default function getStudentIdsSum(lst) {
  return lst.reduce((counter, currentObjd) => counter + currentObj.id, 0);
}
