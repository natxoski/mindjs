var thinkgear = require('node-thinkgear-sockets');
var axios = require('axios');

var client = thinkgear.createClient({port: 3000});

client.on('data',function(data){
	
	console.log((new Date).toISOString() + ': ' + JSON.stringify(data));
	// axios.post('localhost:3000/post', JSON.stringify(data))
  //            .then((res)=>{
	// 	console.log(res);
  //            }).catch((error)=>{
  //             console.log(error);
  //            })
});

client.connect();
