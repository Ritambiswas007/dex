import express from "express"
const app=express();
let ethBalance=200;
let usdcBalance=70000;


// app.post("/addLiquidity",(req,res)=>{

// })
app.post("/buy-asset",(req,res)=>{
    const product =ethBalance*usdcBalance;
    const quantity=req.body.quantity;
    const updatedQuantity=ethBalance-quantity;
    const updatedUsdc=product/updatedQuantity;
    const paidAmount=updatedUsdc-usdcBalance;
    ethBalance=updatedQuantity;
    usdcBalance=updatedUsdc;
    
    res.json({
        message:`you paid ${paidAmount} USDC for ${quantity}  eth`
    })



})
app.post("/sell-asset",(req,res)=>{
    const product =ethBalance*usdcBalance;
    const quantity=req.body.quantity;
    
    const updatedQuantity=ethBalance+quantity;
    const updatedUsdc=product/updatedQuantity;
    const gottenAmount=usdcBalance-updatedUsdc

    ethBalance=updatedQuantity
    usdcBalance=updatedUsdc
    res.json({
        message:`you got ${quantity} usdc for ${gottenAmount} eth`
    })

})
app.post("/quote",(req,res)=>{

})

app.listen(3000)