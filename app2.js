const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write(' Heelllno ');
        res.end();
    }
    if(req.url==='/api'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
})


server.listen(8080, ()=>
    {
        console.log('sraver started on 3000');
    });
