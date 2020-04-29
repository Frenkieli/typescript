type Pong = {
  data  : string | null,
  status: 200 | 500
}

function pingRequest(
  num: number,
  errorProbability: number = 0,
) : Promise<Pong> {
  return new Promise((resolve, reject) => {
    const probability = Math.random();
    if(probability < errorProbability) {
      reject({data : null, status: 500});
    }

    const timeout = Math.random() * 3000;

    setTimeout(() => {
      resolve({ data: `Pong: ${num}`, status: 200});
    }, timeout);
  });
}

// console.time('1st Pong');
// console.time('2nd Pong');
// console.time('3rd Pong');

console.log('Promise Chain Representation');

// pingRequest(1)
//   .then(respons => {
//     console.log(respons.data);
//     console.timeEnd('1st Pong');
//     return pingRequest(2);
//   })
//   .then(res => {
//     console.log(res.data);
//     console.timeEnd('2nd Pong');
//     return pingRequest(3);
//   })
//   .then(res => {
//     console.log(res.data);
//     console.timeEnd('3rd Pong');
//   })
//   .catch(res => {
//     console.log(`Status: ${res.status}`);
//   })

function * pingGenerator() {
  console.time('1st Pong');
  console.time('2nd Pong');
  console.time('3rd Pong');
  const response1 = yield pingRequest(1);
  console.log(response1.data);
  console.timeEnd('1st Pong');
  const response2 = yield pingRequest(2);
  console.log(response2.data);
  console.timeEnd('2nd Pong');
  const response3 = yield pingRequest(3);
  console.log(response3.data);
  console.timeEnd('3rd Pong');
}

// let pingIter = pingGenerator();

// type PRP = Promise<Pong>;

// (pingIter.next().value as PRP).then(res1 => {
//   console.log('Res 1 received');
  
//   (pingIter.next(res1).value as PRP).then(res2 => {
//     console.log('Res 2 received');
    
//     (pingIter.next(res2).value as PRP).then(res3 =>{
//       console.log('Res 3 received');

//       pingIter.next(res3);
//     });

//   });

// });

function runGenerator(gen: () => Generator) {
  const iter = gen();

  function recursiveIteration(pushResponse: any) {
    const result = iter.next(pushResponse);
    if(result.done) return;

    (result.value as Promise<any>).then(res=> {
      recursiveIteration(res);
    });

  }

  (iter.next().value as Promise<any>).then(res => {
    recursiveIteration(res);
  });
}

runGenerator(pingGenerator);

let hhh = 0 ?? 'hi';