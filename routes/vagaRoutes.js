'use strict';
const multer = require('multer');
const express = require('express');
const path = require('path');

const vagaControll = require('../controllers/vagaController');
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

router.get('/vagas', vagaControll.getAllVagas);
router.get('/vaga/:id', vagaControll.getVaga);
router.post('/vaga', vagaControll.addVaga);
router.put('/vaga/:id', vagaControll.updateVaga);
router.patch('/vaga/:id', vagaControll.updateVaga);
router.delete('/vaga/:id', vagaControll.deleteVaga);
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

