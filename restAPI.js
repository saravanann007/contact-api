
var express= require(`express`);
var app= express();
var request= require(`request-promise`);


app.get("/getDetails",function(req,res){
    
    console.log(`printing the request`,req);
    console.log(`priting req.query`,req.query);
    var post_data={'email':req.query.email};

    var headers={
        'Authorization':'Bearer RuMhoM6vbG9c9LxTrS6ac1QLvx23WUpU',
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

app.listen(port,function(){
    console.log('Listening on',port);
});