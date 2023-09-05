const router = require('express').Router()
const UserController = require('../controller/user')
const Validation = require('../middleware/validation')

router.post("/createData", Validation.userValidation, UserController.createUser)
router.get("/getData/:id", Validation.userValidation, UserController.getData)
router.post("/updateData", Validation.userValidation, UserController.updateData)
router.post("/deleteData", Validation.userValidation, UserController.deleteData)
module.exports = router;