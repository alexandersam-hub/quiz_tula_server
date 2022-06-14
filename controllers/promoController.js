const promoService = require('../services/promoService')
const logService = require('../services/logService')

class PromoController{
    async addPromo(req,res){
        try{
            const {user_data, code} = req.body
            if(!code){
                await logService.addLog('addPromoController', `Нет данных: code:${code} userData:${user_data}`)
                return {warning:true, message:'Не заполнено поле "code"'}
            }
            const resPromo = await promoService.addPromo(code, user_data)
            if(resPromo){
                return res.json({warning:false})
            }else{
                return res.json({warning:true})
            }

        }catch (e) {
            logService.addLog('PromoController.addPromo', e)
        }
    }
}

module.exports = new PromoController()