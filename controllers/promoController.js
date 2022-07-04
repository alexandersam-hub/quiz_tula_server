const promoService = require('../services/promoService')
const logService = require('../services/logService')

class PromoController{

    async addPromo(req,res){
        try{
            const {user_data, code} = req.body
            if(!code){
                await logService.addLog('addPromoController', `Нет данных: code:${code} userData:${user_data}`)
                return res.json({warning:true, message:'Не заполнено поле "code"'})
            }
            const resPromo = await promoService.addPromo(code, user_data)
            if(resPromo){
                return res.json({warning:false})
            }else{
                return res.json({warning:true})
            }

        }catch (e) {
            logService.addLog('PromoController.addPromo', e)
            return  res.json({warning:true})
        }
    }
    // async listenPort(port){
    //     client.send('promoQuest', async (message, data)=>{
    //        if(!data.code) {
    //            await logService.addLog('addPromoController, portListener', `Нет данных: code:${data.code} userData:${data.user_data}`)
    //            message.reply({warning:true, message:'Не заполнено code'})
    //        }else{
    //            const resPromo = await promoService.addPromo(data.code, data.userData)
    //            if(resPromo){
    //                message.reply({warning:false})
    //            }else{
    //                message.reply({warning:true})
    //            }
    //        }
    //
    //    })
    //
    // }
}

module.exports = new PromoController()