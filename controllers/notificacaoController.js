'use strict';

const notificacaoData = require('../data/notificacao');

const getAllAviso = async (req, res, next) => {
    try {
        const avisoList = await notificacaoData.getAvisos();
        res.send(avisoList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllInfo = async (req, res, next) => {
    try {
        const informacaoList = await notificacaoData.getInformacao();
        res.send(informacaoList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getavisoUser = async (req, res, next) => {
    try {
        const IdPerfil = req.params.id;
        const notificacaoList = await notificacaoData.getAvisoUser(IdPerfil);
        res.send(notificacaoList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getavisoUserbell = async (req, res, next) => {
    try {
        const IdPerfil = req.params.id;
        const notificacaoList = await notificacaoData.getAvisoUserbell(IdPerfil);
        res.send(notificacaoList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addNotificacao = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await notificacaoData.createInformacao(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addAviso = async (req, res, next) => {
    try {
        const reuniaoId = req.params.reuniaoId;
        const perfilId = req.params.perfilId;
        const insert = await notificacaoData.createAviso(reuniaoId, perfilId);
        res.send(insert);
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message);
    }
}

const updateNotificacaoInativa = async (req, res, next) => {
    try {
        const informacaoId = req.params.id;
        const data = req.body;
        const updated = await notificacaoData.updateNotificacaoInativa(informacaoId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateInformacaoEstado = async (req, res, next) => {
    try {
        const notificacaoId = req.params.id;
        const estado = req.params.estado;
        const updated = await notificacaoData.updateInformacaoEstado(notificacaoId, estado);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateALido = async (req, res, next) => {
    try {
        const avisoId = req.params.id;
        const lido = req.params.lido;
        const updated = await notificacaoData.updateALido(avisoId, lido);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const avisoLido = async (req, res, next) => {
    try {
        const idperfil = req.params.id;
        const data = req.body;
        const updated = await notificacaoData.avisoLido(idperfil, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const avisosCount = async (req, res, next) => {
    try {
        const perfilID = req.params.IDPerfil;
        const avisoscount = await notificacaoData.avisosCount(perfilID);
        res.send(avisoscount);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const avisoemail = async (req, res, next) => {
    try {
        const participanteemail = req.params.email;
        const data = req.body;
        console.log("data:",data)

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
            to: participanteemail,
            subject: 'Falta menos de 30 min para a Reunião:' + data.Assunto,
            text: 'Olá ' + data.NomeParticipante + '!  Falta menos de 30 min para a Reunião:' + data.Assunto + ' relativo ao negócio:' + data.NomeProjeto + ', começa ás:' + data.HoraReuniao + ' local:' + data.LocalReuniao,
            html: `
            <html>
              <body>
                <p>Olá ${data.NomeParticipante}!</p>
                <p>Falta menos de 30 minutos para a reunião:</p>
                <p>Assunto: ${data.Assunto}</p>
                <p>Negócio: ${data.NomeProjeto}</p>
                <p>Horário: ${data.HoraReuniao}</p>
                <p>Local: ${data.LocalReuniao}</p>
              </body>
            </html>
          `,
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

module.exports = {
    getAllAviso,
    getAllInfo,
    getavisoUser,
    addNotificacao,
    updateNotificacaoInativa,
    avisosCount,
    avisoLido,
    getavisoUserbell,
    updateInformacaoEstado,
    updateALido,
    addAviso,
    avisoemail
}