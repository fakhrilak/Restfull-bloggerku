const {Category,Content} = require('../models');
const Joi = require('@hapi/joi');

exports.getContent = async(req,res)=>{
    try{
        const content = await Content.findAll({
            attributes: {
				exclude: [ 'createdAt', 'updatedAt','categoryId' ]
			},include: {
				model: Category,
				as: 'category',
				attributes: {
					exclude: [ 'createdAt', 'updatedAt', 'password' ]
				}
			}
        })
        if (!content){
            return res.status(400).send({
                error:{
                    massage: 'category not found'
                }
            })
        }

        return res.status(200).send({
            massage:'Get All Content Succes',
            data:content
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            massage:'Server Error'
        })
    }
}

exports.getContentCategory = async (req,res)=>{
    try{
        const content = await Content.findAll({
            where:{
                ...req.params
            },
            attributes:{
                exclude: [ 'createdAt', 'updatedAt' ]
            }
        })
        if(!content){
            return res.status(400).send({
                massage:'Content Not Found'
            })
        }
        return res.status(200).send({
            massage:'Content by categoryId Success',
            data:content
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            massage:'Server Error'
        })
    }
} 



exports.addContent = async (req,res) =>{
    try{
        const schema = Joi.object({
            img: Joi.string().required(),
            text: Joi.string().required(),
            title: Joi.string().required(),
            categoryId: Joi.number().required()
        })

        const {error} = schema.validate(req.body);

        if (error){
            return res.status(400).send({
                error:{
                    massage: error.detail[0].massage
                }
            })
        }

        const content = await Content.create({
            ...req.body
        })

            return res.status(200).send({
                massage:'Content Berhasil ditambah',
                data:content
            })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            massage:'Server Error'
        })

    }
}