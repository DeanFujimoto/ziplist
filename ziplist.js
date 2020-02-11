const test1 = [1,2,3];
const test2 = ["a","b","c"];

function zipList(nums1, nums2){
  let fin = [];
  let i = 0;
  let t = 0;
  while(t < nums1.length){
    fin[i] = nums1[t];
    fin[i +1] =nums2[t];
    i +=2;
    t ++;
  }
  return fin;

}
console.log(zipList(test1, test2));

function zipListTheSimpleWay(nums1, nums2){
  let zipped = _.zip(nums1, nums2);
  return _.flatten(zipped);
}
console.log(zipListTheSimpleWay(test1,test2));