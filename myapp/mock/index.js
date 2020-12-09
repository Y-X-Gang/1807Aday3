const Mock  = require('mockjs')

const carData = Mock.mock({
    "list|30-60":[
        {
            "name": "@cname",
            "img": "@image(100x100, @color)",
            "id": "@id",
            "number|123.1-10": 1
        }
    ]
})

module.exports = carData
