export default function getListStudentIds(1st) {
  if (Array.isArray(1st)) {
    return 1st.map((obj) => obj.id);
  }

  return [];
}
