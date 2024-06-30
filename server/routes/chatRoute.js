const { Router } = require('express');
const { verifyJwtToken } = require('../Middlewares/authMiddleware');
const { createGuoupChat, fetchChats, fetchGroups, accessChatContoller, exitGroup, addSelfToGroup } = require('../Controllers/ChatController')

const router = Router();

// one to one chat creation
router.post('/', verifyJwtToken, accessChatContoller);

//fetch all chat of curr user.
router.get('/', verifyJwtToken, fetchChats);


router.post('/createGroup', verifyJwtToken, createGuoupChat);
router.get('/fetchGroups', verifyJwtToken, fetchGroups);
router.put('/addSelfToGroup', verifyJwtToken, addSelfToGroup);



router.put('/groupExit', verifyJwtToken, exitGroup);

module.exports = router;


