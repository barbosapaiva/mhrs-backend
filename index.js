'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');

const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const vagaRoutes = require('./routes/vagaRoutes');
const utilizadorRoutes = require('./routes/utilizadorRoutes');
const ideiaRoutes = require('./routes/ideiaRoutes');
const experienciaRoutes = require('./routes/experienciaRoutes');
const carreiraRoutes = require('./routes/carreiraRoutes');
const tipoprojetoRoutes = require('./routes/tipoprojetoRoutes');
const localizacaoRoutes = require('./routes/localizacaoRoutes');
const areaideiaRoutes = require('./routes/areaideiaRoutes');
const estadoRoutes = require('./routes/estadoRoutes');
const beneficioRoutes = require('./routes/beneficioRoutes');
const negocioRoutes = require('./routes/negocioRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const projetoRoutes = require('./routes/projetoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const dashboardRoutes = require ('./routes/dashboardRoutes');
const candidaturaRoutes = require('./routes/candidaturaRoutes');
const habilitacaoRoutes = require('./routes/habilitacaoliterariaRoutes');
const areaformacaoRoutes = require('./routes/areaformacaoRoutes');
const generoRoutes = require('./routes/generoRoutes');
const tipocandidaturaRoutes = require('./routes/tipocandidaturaRoutes');
const ficheiroRoutes = require('./routes/ficheiroRoutes');
const agendaRoutes = require('./routes/agendaRoutes');
const notificacoes = require('./routes/notificacaoRoutes');
const tipoperfilRoutes = require('./routes/tipoperfilRoutes');
const tipointeracaoRoutes = require('./routes/tipointeracaoRoutes');
const canalcomunicacao = require('./routes/canalRoutes');
const interacoes = require('./routes/interacaoRoutes');
const reuniaoRoutes = require('./routes/reuniaoRoutes');
const participanteRoutes = require('./routes/participanteRoutes');
const entrevistaRoutes = require('./routes/entrevistaRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('src/'));

app.use('/api', eventRoutes.routes);
app.use('/api', vagaRoutes.routes);
app.use('/api', utilizadorRoutes.routes);
app.use('/api', ideiaRoutes.routes);
app.use('/api', carreiraRoutes.routes);
app.use('/api', experienciaRoutes.routes);
app.use('/api', localizacaoRoutes.routes);
app.use('/api', areaideiaRoutes.routes);
app.use('/api', estadoRoutes.routes);
app.use('/api', beneficioRoutes.routes);
app.use('/api', negocioRoutes.routes);
app.use('/api', clienteRoutes.routes);
app.use('/api', projetoRoutes.routes);
app.use('/api', categoriaRoutes.routes);
app.use('/api', tipoprojetoRoutes.routes);
app.use('/api', dashboardRoutes.routes);
app.use('/api', candidaturaRoutes.routes);
app.use('/api', habilitacaoRoutes.routes);
app.use('/api', areaformacaoRoutes.routes);
app.use('/api', generoRoutes.routes);
app.use('/api', tipocandidaturaRoutes.routes);
app.use('/api', ficheiroRoutes.routes);
app.use('/api', agendaRoutes.routes);
app.use('/api', notificacoes.routes);
app.use('/api', tipoperfilRoutes.routes);
app.use('/api', tipointeracaoRoutes.routes);
app.use('/api', canalcomunicacao.routes);
app.use('/api', interacoes.routes);
app.use('/api', reuniaoRoutes.routes);
app.use('/api', participanteRoutes.routes);
app.use('/api', entrevistaRoutes.routes);

app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});