import express from 'express' // async works shows error at first because we have to specify assemble as module  
                              // else it treat as Common js thats why error
                              // change type:"module" in package.json
const app = express();

// app.get('/',(req,res)=>{
//     res.send('send')
// });

app.get('/api/jokes',(req,res)=>{
    const jokes=[{

        id:1,
        title:"A"
    },{
        id:1,
        title:"B"

    }]

    res.send(jokes)
})
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server start`);
    
})