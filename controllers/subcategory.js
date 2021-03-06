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
        const {title} = req.body;
        const schema = Joi.object({
            category: Joi.string().required(),
            title: Joi.string().required(),
            userId:Joi.number().required()
        })

        const {error} = schema.validate(req.body);

        if (error){
            return res.status(400).send({
                error:{
                    massage: error.detail[0].massage
                }
            })
        }
        const SubCategory = await Subcategory.findOne({
            where:{
                title
            }
        })
        if(SubCategory){
            return res.status(400).send({
                massage:'Subcategory dah ada'
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

exports.deletSubcategory = async (req,res)=>{
    try{
        const {id}=req.params
        const category = await Subcategory.findOne({
            where:{
                id
            },
            attributes: {
				exclude: [ 'createdAt', 'updatedAt' ]
            }
            
        })
        if (!category){
            return res.status(400).send({
                error:{
                    massage: 'Subcategory not found'
                }
            })
        }else{
            await category.destroy({
                where:{
                    id,
                },
            })

            return res.send({
                data:{
                    id
                }
            })
        }
    }catch(err){
        console.log(error);
        return res.status(500).send({
          error: {
            message: "Server Error",
          },
        });
    }
}