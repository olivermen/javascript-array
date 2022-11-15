var obj_randomArray = document.getElementById("random-array");
var obj_sizeArray = document.getElementById("array-size");
var obj_sum = document.getElementById("sum-array");
var obj_max = document.getElementById("max-value");
var obj_min = document.getElementById("min-value");

function generate() {
  // Generate Random Array
  var arr_random = [];
  var arr_sort;
  var n_sum;
  var n_max;
  var n_min;
  var n_arrSize = Math.floor(Math.random() * 100) + 1;

  while (arr_random.length < n_arrSize) {
    var r = Math.floor(Math.random() * 1000) + 1;
    if (arr_random.indexOf(r) === -1) arr_random.push(r);
  }

  const initialValue = 0;

  // Sort Array
  arr_sort = arr_random.sort(function (a, b) {
    return a - b;
  });

  // Sum of Array
  n_sum = arr_random.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  // Max value of Array
  n_max = Math.max.apply(0, arr_random);

  // Min value of Array
  n_min = Math.min.apply(0, arr_random);

  obj_randomArray.value = arr_sort.join("  ");
  obj_sizeArray.textContent = " (" + n_arrSize.toString() + ")";
  obj_sum.value = n_sum.toString();
  obj_max.value = n_max.toString();
  obj_min.value = n_min.toString();
}
