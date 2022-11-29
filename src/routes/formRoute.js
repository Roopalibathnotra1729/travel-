const FormModel = require('../models/FormModel');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await FormModel.find();
        if (!users) {
            return res.status(500).json({ msg: 'no users found' });
        }
        return res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await FormModel.findById({_id});
        if (!user) {
            return res.status(500).json({ msg: 'no user found' });
        }
        return res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err.message);
    }
})



module.exports = router;