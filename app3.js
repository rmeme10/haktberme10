MongoClient.connect(url, function(err, db) {
    if(err) {throw err;}
    var dbo = db.db('ac10re');
    var cursor = dbo.collection('its').find({"size.h":{$gt:'30'}});
       cursor.each(function(err, doc) {
            
            console.log(doc);
            //res.end(doc);
            
            
        });
    //console.log(cursor);
});
