const {Category,Content,User} = require('../models');
const Joi = require('@hapi/joi');


exports.getContent = async(req,res)=>{
    try{
        const content = await Content.findAll({
            attributes:{
                exclude: [ 'createdAt', 'updatedAt' ]
            },
            include: {
                model: User,
                as: 'user',
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

exports.getContentByUser = async (req,res) =>{
    try{
        const {userId}=req.params
        const content = await Content.findAll({
            where:{
              userId
            },
            attributes:{
                exclude: [ 'createdAt', 'updatedAt' ]
            },
            include: {
                model: User,
                as: 'user',
                attributes: {
                    exclude: [ 'createdAt', 'updatedAt', 'password' ]
                }
            }
        })
        if(content){
            return res.status(200).send({
               massage: content 
            })
        }else{
            return res.status(400).send({
                massage:'Not Found'
            })
        }
    }catch(error){
        return res.status(500).send({
            massage:'Server Error'
        })
    }
}

exports.addContent = async (req,res) =>{
    try{
        const schema = Joi.object({
            body: Joi.string().required(),
            title: Joi.string().required(),
            categoryId: Joi.string().required(),
            userId: Joi.string().required()
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

        if (!content){
            return res.status(400).send({
                error:{
                    massage: 'Try Again'
                }
            })
        }else{
        return res.status(200).send({
            massage:'Content Berhasil ditambah',
            data:content
        })
    }
    }catch(err){
        console.log(err)
        return res.status(500).send({
            massage:'Server Error'
        })

    }
}