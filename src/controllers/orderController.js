//const { count } = require("console")
// const {isValidObjectId}=require("mongoose")
const OrderModel= require("../models/orderModel")
const UserModel= require("../models/userModel")
const ProductModel = require("../models/productModel")

const createOrder= async function (req, res) {
    req.body.isFreeAppUser=req.isFreeAppUser
    let orderDetails = req.body                     
    const user= await UserModel.findById(orderDetails.userId)
    const product= await ProductModel.findById(orderDetails.productId)

    if(user){
        if(product){
            if(req.isFreeAppUser===false){
                let price=product.price
                if(user.balance>price){
                let updateBalance=await UserModel.findByIdAndUpdate({_id:req.body.userId},{$inc:{balance:-price}},{new:true})
                req.body.amount=price
                let orderCreated=await OrderModel.create(orderDetails)
                res.send({msg:orderCreated})   
            }
            else
                res.send({msg:"user balance is insufficient"})
            
            }
            else{
                req.body.amount=0
                let orderCreated=await OrderModel.create(orderDetails)
                res.send({msg:orderCreated})
            }
        }
            else
                res.send({msg:"please enter valid productId"})
            
    }
            else
            res.send({msg:"please enter valid userId"})
        
    }
    


module.exports.createOrder= createOrder
