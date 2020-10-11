const {User}=require('../models')

exports.getAllUser = async(req,res)=>{
    try{
        const user = await User.findAll({
            attributes: {
                exclude:['password']
            }
        })
        if (!user){
            return res.status(500).send({
                massage:'user not found'
            })
        }else{
            return res.send({
                massage:'Get All User Succsess',
                data:user       
            })
        }
    }catch(error){
        return res.status(500).send({
            error:{
                massage:error
            }
        })
    }
}

exports.deletUser = async(req,res)=>{
    try{
        const {id}=req.params
        const user = await User.findOne({
            where:{
                id
            }
        });
        if (!user){
            return res.status(400).send({
                error:{
                    massage:'User Not Found'
                }
            })
        }else{
            const deletUser = await User.destroy({
                where:{
                    id
                }
            })

            return res.send({
                data:{
                    massage:'Deleted User',
                    data:deletUser
                }
            })
        }
    }catch(error){
        return res.status(500).send({
            error:{
                massage:error
            }
        })
    }
}