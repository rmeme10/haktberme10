MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db('ac10re');
    var docs = [{item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    {item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    {item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }];
    dbo.collection('its').insertMany(docs);
    //console.log(cursor);
});
