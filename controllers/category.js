const {Category,Content} = require('../models');
const Joi = require('@hapi/joi');

exports.getCategory = async (req,res)=>{
    try{
        const category = await Category.findAll({
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

        return res.status(200).send({
            massage:'Get All Category Succes',
            data:category
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            error:{
                massage:'Server Error'
            }
        })
    }
}


exports.addCategory = async(req,res)=>{
    try{
        const schema = Joi.object({
            img: Joi.string().required(),
            text: Joi.string().required(),
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

        const category = await Category.create({
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
            massage:'Category Berhasil ditambah',
            data:category
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
			error: {
				message: 'Server Error'
			}
		});
    }
}