const request = require('request');
let products_ar = [];

let url = "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json";
request(url, (err, response, data) => {
    if (!err && response.statusCode == 200) {
        data = JSON.parse(data);
        data.map(item => {
            if (item.status != 0) {
                let obj = {};
                if (item.type == 1) {
                    item = item.fedex;
                }
                else if (item.type == 2) {
                    item = item.ups[0];
                }
               
                    obj = {
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        image: item.thumbnailUrl
                    }

                    products_ar.push(obj);
            }

        })
       
    }
})

exports.products_ar = products_ar;