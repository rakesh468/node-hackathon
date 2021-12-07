const express=require("express");
const app=express();
const PORT=7000;
app.get("/",(request,response)=>{
    response.send("hello world")
});
 const products=[
    {
     "id": "100",
     "poster": "https://m.media-amazon.com/images/I/61TnX0PmqES._SX679_.jpg",
     "name": " One plus Node",
     "color": "Blue",
     "storage": "64GB 6GB RAM, 128GB 8GB RAM, 256GB 12GB RAM",
     "rating": 8,
     "price": "$2,000",
     "final_price": "$1,500"
    },
    {
     "id": "101",
     "poster": "https://www.bgr.in/wp-content/uploads/2020/08/vivo-Y20.jpg",
     "name": "Vivo Y20",
     "color": "white",
     "storage": "64GB 3GB RAM, 64GB 4GB RAM, 64GB 6GB RAM",
     "rating": 7,
     "price": "$4,000",
     "final_price": "$3,000",
     "emi": "Save extra with No Cost EMI"
    },
    {
     "id": "102",
     "poster": "https://images-eu.ssl-images-amazon.com/images/I/41qEt1KLOIL._SX342_SY445_QL70_FMwebp_.jpg",
     "name": " Apple iphone XR",
     "color": " Sky Blue",
     "storage": "64GB 3GB RAM, 128GB 3GB RAM, 256GB 3GB RAM",
     "rating": 7.5,
     "price": "$1,200",
     "final_price": "$2,500"
    },
    {
     "id": "103",
     "poster": "https://d2xamzlzrdbdbn.cloudfront.net/products/aa4271ef-34a7-4d80-9ec4-a4f3dccc6677.jpg",
     "name": "Oppo Reno 6",
     "color": "Black",
     "storage": "128GB 8GB RAM, 256GB 12GB RAM",
     "rating": 9,
     "price": "$4,000",
     "final_price": "$3,750",
     "emi": "Save extra with No Cost EMI"
    },
    {
     "id": "104",
     "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0SJiUQ-6FOPk_Dgum24HQODJ7Yho1FcjHQ&usqp=CAU",
     "name": "Samsung Galaxy M12",
     "color": "Black",
     "storage": "128GB 8GB RAM",
     "rating": 8.5,
     "price": "$1,400",
     "final_price": "$1,100",
     "emi": "Save extra with No Cost EMI"
    },
    {
     "id": "105",
     "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUnp2z9PmfxJnV4_J-2QggTUeFvNxicG6LUBgypFBHYt0tKxps49JRdsQ2mt32pdaX04&usqp=CAU",
     "name": "Oppo A12",
     "color": "Blue",
     "storage": "128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM",
     "rating": 7.2,
     "price": "$2,700",
     "final_price": "$1,650"
    },
    {
     "id": "106",
     "poster": "https://www.gizmochina.com/wp-content/uploads/2019/09/Google-Pixel-4-1.jpg",
     "name": "Google pixel 6",
     "color": "white",
     "storage": "128 GB",
     "rating": 8.2,
     "price": "$1,800",
     "final_price": "$1,250",
     "emi": "Save extra with No Cost EMI"
    },
    {
     "id": "107",
     "poster": "https://static.digit.in/product/616f4e0e4a3810b71c23e6c4e9ea4f23d724cd96.jpeg",
     "name": "Redmi note 9",
     "color": "white",
     "storage": "128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM",
     "rating": 8.9,
     "price": "$1,200",
     "final_price": "$1,000",
     "emi": "Save extra with No Cost EMISave extra with No Cost EMI"
    },
    {
     "id": "108",
     "poster": "https://i0.wp.com/nokiapoweruser.com/wp-content/uploads/2021/09/Nokia-G50-5G-Blue-color-model.jpg?fit=1250%2C1561&ssl=1",
     "name": "Noki G50",
     "color": "white",
     "storage": "128GB 6GB RAM",
     "rating": 8.8,
     "price": "$1,800",
     "final_price": "$1,250",
     "emi": "Save extra with No Cost EMI"
    },
    {
     "id": "109",
     "poster": "https://www.bgr.in/wp-content/uploads/2019/08/realme-5-back.jpg",
     "name": "Realme 5",
     "color": "Skyblue",
     "storage": "128GB 8GB RAM, 256GB 12GB RAM",
     "rating": 6.5,
     "price": "$800",
     "final_price": "$650",
     "emi": "Save extra with No Cost EMI"
    }
   ]

app.get("/products",(request,response)=>{
response.send(products);
})







app.listen(PORT,()=>console.log("App started",PORT));

