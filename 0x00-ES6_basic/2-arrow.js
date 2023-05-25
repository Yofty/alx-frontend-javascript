export default function getNeighborhoodList() {
  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeihborhoods.push(newNeighborhood);
    return self. sanFranciscoNeighborhoods;
  };
}
