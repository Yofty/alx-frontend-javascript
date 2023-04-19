export default function getFullResponseFromAPI(success) {
  return new Promise((resoleve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error(`The fake API is not working currently`));
    }
  });
}
