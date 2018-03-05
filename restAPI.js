
var express= require(`express`);
var app= express();
const reqest= request(`request-promise`);


app.get("/getDetails",function(res,req){
  
    var post_data={'email':req.query.email};

    var headers={
        'Authorization':'Bearer <enter code here>',
        'Content-Type':'application/json',
        'Content-Length':post_data.length
    }

    var options={
        url:'https://api.fullcontact.com/v3/person.enrich',
        method:'POST',
        headers:headers,
        body:post_data,
        json:true,
        rejectedUnauthorized:false
    }

    request(options).then(response=>{
        res.send(response);

    }).catch(err=>{
        console.log(`Something went wrong`,err);
        res.send({status:500,body:`Error Retrieving the contact details`});
    });

});


var port=process.env.PORT || 5000;

app.listen(port=>{
    console.log('Listening on {$port}',port);
})