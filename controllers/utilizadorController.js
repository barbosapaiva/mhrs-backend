'use strict';

const utilizadorData = require('../data/utilizadores');

const getAllUtilizadores = async (req, res, next) => {
    try {
        const utilizadoreslist = await utilizadorData.getUtilizadores();
        res.send(utilizadoreslist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addUtilizadorExterno = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await utilizadorData.createUtilizadorExterno(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addUtilizadorInterno = async (req, res, next) => {
    try {
        const data = req.body;
        //pass generator
        data.Palavrapasse = Math.random().toString(36).slice(-8);

        const insert = await utilizadorData.createUtilizadorInterno(data);

        //emailService
        const nodemailer = require('nodemailer');
        const mailgunTransport = require('nodemailer-mailgun-transport');

        const auth = {
            auth: {
                api_key: '6e0dfcc02d0ccd8c4926fe3ac6875b78-af778b4b-e1f31abe',
                domain: 'sandbox1b8648e5a6a3403eb42a51788e9a6908.mailgun.org',
            },
        };

        const transporter = nodemailer.createTransport(mailgunTransport(auth));

        const mailOptions = {
            from: 'noreply.vision4you@gmail.com',
            to: data.Email,
            subject: 'A sua palavra-chave temporária - Vision4you',
            text: 'Olá, ' + data.PNome + '! Acaba de se registar na aplicação Vision4you. Esta é a sua palavra-chave temporária de acesso: ' + data.Palavrapasse,
            //html: "<h3>data.Palavrapasse</h3>"
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Email sending failed', error);
            } else {
                console.log('Email sent', info.response);
            }
        });

        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatePasswordGlobal= async (req, res, next) => {
    try {
        const id =  req.params.id;
        const data = req.body;
        const updated = await utilizadorData.updatePassGlobal(id,data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUtilizadorInternoPassword = async (req, res, next) => {
    try {
        //const utiliziadorId =  req.params.id;
        const data = req.body;

        const updated = await utilizadorData.updateUtilizadorInternoPassword(data);

        //res.send(updated);
        if (updated) {
            res.send(updated);
        } else {
            res.status(404).send("Email não encontrado.");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUtilizadorInternoTempPassword = async (req, res, next) => {
    try {
        //const utiliziadorId =  req.params.id;
        const data = req.body;

        //pass generator
        data.Palavrapasse = Math.random().toString(36).slice(-8);

        const updated = await utilizadorData.updateUtilizadorInternoTempPassword(data);

        //emailService
        const nodemailer = require('nodemailer');
        const mailgunTransport = require('nodemailer-mailgun-transport');

        const auth = {
            auth: {
                api_key: '6e0dfcc02d0ccd8c4926fe3ac6875b78-af778b4b-e1f31abe',
                domain: 'sandbox1b8648e5a6a3403eb42a51788e9a6908.mailgun.org',
            },
        };

        const transporter = nodemailer.createTransport(mailgunTransport(auth));

        const mailOptions = {
            from: 'noreply.vision4you@gmail.com',
            to: data.Email,
            subject: 'A sua palavra-chave temporária - Vision4you',
            text: 'Olá! Acaba de solicitar a reposição da sua palavra-chave na aplicação Vision4you. Esta é a sua palavra-chave temporária de acesso: ' + data.Palavrapasse,
            //html: "<h3>data.Palavrapasse</h3>"
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Email sending failed', error);
            } else {
                console.log('Email sent');
            }
        });

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUtilizadorEstado = async (req, res, next) => {
    try {
        const utiliziadorId = req.params.id;
        const data = req.body;
        const updated = await utilizadorData.updateUtilizadorEstado(utiliziadorId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUtilizadorTipoPerfil = async (req, res, next) => {
    try {
        const utiliziadorId = req.params.id;
        const data = req.body;
        const updated = await utilizadorData.updateUtilizadorTipoPerfil(utiliziadorId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUtilizador = async (req, res, next) => {
    try {
        const utiliziadorId = req.params.id;
        const utiliziador = await utilizadorData.getById(utiliziadorId);
        if (utiliziador) {
            res.send(utiliziador);
        } else {
            res.status(404).send("Utilizador não encontrado");
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const loginUtilizadorInterno = async (req, res, next) => {
    try {
        const data = req.body;
        const colaborador = await utilizadorData.loginUtilizadorInterno(data);
        if (colaborador) {
            res.send(colaborador);
        } else {
            res.status(404).send("Utilizador não encontrado");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const loginUtilizadorExterno = async (req, res, next) => {
    try {
        //const email = req.params.email;
        const data = req.body;
        const utilizador = await utilizadorData.loginUtilizadorExterno(data);
        if (utilizador) {
            res.send(utilizador);
        } else {
            res.status(404).send("Utilizador não encontrado");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUtilizadorPerfil = async (req, res, next) => {
    try {
        const IdPerfil = req.params.id;
        const perfil = await utilizadorData.getUtilizadorPorPerfil(IdPerfil);
        res.send(perfil);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateDadosPessoais = async (req, res, next) => {
    try {
        const idperfil = req.params.id;
        const data = req.body;
        const updated = await utilizadorData.updateDadosPessoais(idperfil, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatePerfil = async (req, res, next) => {
    try {
        const idperfil = req.params.id;
        const data = req.body;
        const updated = await utilizadorData.updatePerfil(idperfil, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatePerfilCompleto = async (req, res, next) => {
    try {
        const idperfil = req.params.id;
        const data = req.body;
        const updated = await utilizadorData.updateperfiltodo(idperfil, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateCV = async (req, res, next) => {
    try {
        const idperfil = req.params.id;
        const data = req.body;
        const updated = await utilizadorData.updatecv(idperfil, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateimg = async (req, res, next) => {
    try {
        const idperfil = req.params.id;
        const data = req.body;
        const updated = await utilizadorData.updateimg(idperfil, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const ValidaUtilizador = async (req, res, next) => {
    try {
        const data = req.body;
        const utilizador = await utilizadorData.getValidaUtilizador(data);
        res.send(utilizador)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllUtilizadores,
    addUtilizadorExterno,
    addUtilizadorInterno,
    getUtilizador,
    updatePasswordGlobal,
    updateUtilizadorInternoPassword,
    updateUtilizadorInternoTempPassword,
    updateUtilizadorEstado,
    updateUtilizadorTipoPerfil,
    loginUtilizadorInterno,
    loginUtilizadorExterno,
    getUtilizadorPerfil,
    updateDadosPessoais,
    updatePerfil,
    updateCV,
    updateimg,
    updatePerfilCompleto,
    ValidaUtilizador
}