'use strict';

const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let destination;
        if (req.path.includes('/beneficio')) {
            destination = 'src/img';
        } else if (req.path.includes('/imagemperfil')) {
            destination = 'src/imgperfil';
        } else if (req.path.includes('/anexo')) {
            destination = 'src/anexo';
        } else {
            destination = 'src/cv';
        }
        cb(null, destination);
    },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const fileName = Date.now() + ext;
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

router.post('/beneficio/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    const imagePath = req.file.filename;
    res.status(200).json({ path: imagePath });
  } else {
    res.status(400).json({ error: 'Nenhum arquivo foi enviado.' });
  }
});

router.post('/candidatura/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    const NomeFichCV = req.file.filename;
    res.status(200).json({ path: NomeFichCV });
  } else {
    res.status(400).json({ error: 'Nenhum arquivo foi enviado.' });
  }
});

router.put('/cvperfil/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        const NomeFichCV = req.file.filename;
        res.status(200).json({ path: NomeFichCV });
    } else {
        res.status(400).json({ error: 'Nenhum arquivo foi enviado.' });
    }
});

router.put('/imagemperfil/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        const imagePath = req.file.filename;
        res.status(200).json({ path: imagePath });
    } else {
        res.status(400).json({ error: 'Nenhum arquivo foi enviado.' });
    }
});

router.put('/anexo/upload', upload.single('file'), (req, res) => {
        if (req.file) {
            const imagePath = req.file.filename;
            res.status(200).json({ path: imagePath });
        } else {
            res.status(400).json({ error: 'Nenhum arquivo foi enviado.' });
        }
    });

router.get('/anexo/download', (req, res) => {
        const filename = req.query.filename;
        if (filename) {
            const filepath = path.join(__dirname, '..', 'src', 'anexo', filename);

            res.setHeader('Content-Type', 'application/pdf');     
            res.setHeader('Content-Disposition', `attachment; filename=${filename}`);       
            res.sendFile(filepath);
        } else {
            res.status(400).json({ error: 'Nome de arquivo n�o fornecido.' });
        }
    });


router.get('/download', (req, res) => {
    const filename = req.query.filename;
    if (filename) {
        const filepath = path.join(__dirname, '..', 'src', 'imgperfil', filename);
        res.setHeader('Content-Type', 'image/*');
        res.sendFile(filepath);
    } else {
        res.status(400).json({ error: 'Nome de arquivo n�o fornecido.' });
    }
});


module.exports = {
  routes: router
};
