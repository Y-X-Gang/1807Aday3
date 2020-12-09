import Mock from 'mockjs'

const data = Mock.mock({
    "list|10-20": [
        {
            "name": "@cname",
            "img": "@image(100x100, @color)",
            "id": "@id"
        }
    ]
})

Mock.mock('/api/getList', 'get', data)