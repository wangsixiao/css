
// Promise.resolve(1).then(2).then(()=>{
//     Promise.resolve(3)
//   }).then((data)=>{console.log(data)})

//   let arr = [{age:31},{age:18},{age:22}]
//   let max = 0
//   arr.map(item => {
//     if(max < item['age']) max=item['age']
//   })
//   console.log(max)

  

var a1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

var a2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

var a3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});
var timeout = timer => new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve();
  }, timer);
});
