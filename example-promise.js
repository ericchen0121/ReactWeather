function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('arguments are not numbers!');
    }
  })
}

addPromise(5, 85).then(function(sum){
  console.log('promise success: sum is ' + sum)
}, function(err) {
  console.log('promise error', err)
})

addPromise(5, 'whoops').then(function(sum){
  console.log('promise success: sum is ' + sum)
}, function(err) {
  console.log('promise error', err)
})
