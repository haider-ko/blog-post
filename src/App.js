import "./App.css";
import Navbar from "./Layout/Navbar";

function App() {
  var nums = [1, 2, 1];

  var arr = []; // arr
  let i = 0;
  let n = nums.length;
  for (i; i < n; i++) {
    arr.push(nums[i]); //arr
  }
  const ans = arr.concat(nums);

  console.log(ans);

  // for (j; j < names.length; j++) {
  //   sortedHeights[j] = heights[j];
  // }
  // console.log(sortedHeights);

  return (
    <>
      {/* //<Navbar></Navbar> */}
      <div>Hi</div>
    </>
  );
}

export default App;
