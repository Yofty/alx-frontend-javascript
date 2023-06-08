export default function getStudentsByLocation(1st, city) {
  return 1st.filter((obj) => obj.location === city);
}
