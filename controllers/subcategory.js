const {Subcategory} = require('../models');
const Joi = require('@hapi/joi');

exports.getSubCategory = async (req,res)=>{
    try{
        const category = await Subcategory.findAll({
            attributes: {
				exclude: [ 'createdAt', 'updatedAt' ]
            }
            
        })
        if (!category){
            return res.status(400).send({
                error:{
                    massage: 'category not found'
                }
            })
        }
        else{
           return res.status(200).send({
            massage:'Get All SubCategory Succes',
            data:category
        }) 
        }
        
    }catch(error){
        console.log(error)
        return res.status(500).send({
            error:{
                massage:'Server Error'
            }
        })
    }
}

exports.addSubCategory = async (req,res)=>{
    try{
        const schema = Joi.object({
            category: Joi.string().required(),
            title: Joi.string().required()
        })

        const {error} = schema.validate(req.body);

        if (error){
            return res.status(400).send({
                error:{
                    massage: error.detail[0].massage
                }
            })
        }

        const category = await Subcategory.create({
            ...req.body
        })

        if (!category){
            return res.status(400).send({
                error:{
                    massage: 'Try Again'
                }
            })
        }

        return res.status(200).send({
            massage:'SubCategory Berhasil ditambah',
            data:category
        })
    }catch{

    }
}