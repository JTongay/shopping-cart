export default function InStock() {
  return (input) => {
    if (input) {
      return 'Yes'
    } else {
      return 'No'
    }
  };
};
