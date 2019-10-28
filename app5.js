MongoClient.connect(url, function(err, db) {

    var dbo= db.db('ac10re');
    dbo.collection('its').updateOne({
        "item": "journal"
    }, {
        $set: {
            "size.h": "30.4"
        }
    });
});
