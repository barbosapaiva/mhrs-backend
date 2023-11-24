'use strict';
const multer = require('multer');
const express = require('express');
const path = require('path');

const candidaturaControll = require('../controllers/candidaturaController');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/cv');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const fileName = Date.now() + ext;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

router.get('/candidaturas', candidaturaControll.getAllCandidaturas);
router.get('/candidatura/:id', candidaturaControll.getCandidatura);
router.post('/candidatura', candidaturaControll.addCandidatura);
router.put('/candidatura/:id', candidaturaControll.updateCandidatura);
router.delete('/candidatura/:id', candidaturaControll.deleteCandidatura);
router.get('/minhasCandidaturas/:id', candidaturaControll.getCandidaturaPorUtilizador);
router.get('/candidaturaValidation/:vagaid/:perfilid', candidaturaControll.candidaturaValidation);



router.post('/curriculo/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        const imagePath = req.file.filename;
        res.status(200).json({ path: imagePath });
    } else {
        res.status(400).json({ error: 'Nenhum arquivo foi enviado.' });
    }
});

module.exports = {
    routes: router
}

