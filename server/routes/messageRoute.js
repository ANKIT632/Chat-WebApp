const {Router}=require('express');
const {verifyJwtToken}=require('../Middlewares/authMiddleware');
const {allMessage,sendMessage}=require('../Controllers/MessageController');

const router=Router();

router.route('/:chatId').get(verifyJwtToken,allMessage);
router.route('/').post(verifyJwtToken,sendMessage);

module.exports=router;
