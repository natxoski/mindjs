let app = require ('express')();
let spawn = require('child_process').spawn;

const port = process.env.PORT || 3000;
let count=0;
const path01 = '/sensehat01.js';

app.get('/', (req,res)=>{
  res.send('Get request working');
  let a=spawn('raspistill', ['-t', '1', '-o', `testingCam${count}.jpg`]);
  a.on('data', (data)=>{
    console.log(data);
  })
  count ++;
//  console.log(a);
});

app.post('/test', (req,res)=>{
  console.log('Post request working');
  if (req.body.eSense.attention === 75) {
    res.send('Working');
    let process=spawn('raspistill', ['-t 0','-o testingCam2.jpg']);
  }  
});

app.listen(port, ()=>{
  console.log(`app listenning on localhost:${port}`);
});
