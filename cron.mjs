import cron from 'node-cron';
import fetch from 'node-fetch';

function falta30MinutosOuMenos(dataHora) {
  const agora = new Date();
  const hora = agora.getHours() + 1;
  const minutos = agora.getMinutes();

  const [horadata, mindata] = dataHora.split(':').map(Number);

  //console.log("hora e minutos: agora: ",hora,":",minutos)
  //console.log("horadata e mindata: agora: ",horadata,":",mindata)
  const diffMinutos = (horadata * 60 + mindata) - (hora * 60 + minutos);
  if (diffMinutos <= 30 && diffMinutos >= 0) {
    return 1;
  }
  return 0
}

cron.schedule('*/30 * * * *', async () => {
  console.log('Verificando reuniões...');

  try {
    const response = await fetch('https://softapp.onrender.com/api/reunioes');
    const data = await response.json();
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    const dia = hoje.getDate().toString().padStart(2, '0');
    const dataFormatadaHoje = `${ano}-${mes}-${dia}`;
    for (const reuniao of data) {

      const dataReuniao = new Date(reuniao.DataReuniao);
      const anoR = dataReuniao.getFullYear();
      const mesR = (dataReuniao.getMonth() + 1).toString().padStart(2, '0');
      const diaR = dataReuniao.getDate().toString().padStart(2, '0');
      const dataFormatadaReuniao = `${anoR}-${mesR}-${diaR}`;
      const horaReuniao = new Date(reuniao.HoraReuniao);
      const hora = horaReuniao.getHours();
      const minutos = horaReuniao.getMinutes();
      const horaFormatada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
      // console.log("dataFormatadaReuniao", dataFormatadaReuniao)
      // console.log("dataFormatadaHoje", dataFormatadaHoje)
      // console.log("horaFormatada", horaFormatada)
      // console.log("nivel1")
      if (dataFormatadaReuniao === dataFormatadaHoje && falta30MinutosOuMenos(horaFormatada)) {
        //console.log("nivel2")
        const responsePart = await fetch('https://softapp.onrender.com/api/participanteR/' + reuniao.IDReuniao);
        const dataPart = await responsePart.json();
        //console.log("Reuniao",reuniao)
        for (const participante of dataPart) {
          //console.log("nivel3")
          const responseAviso = await fetch('https://softapp.onrender.com/api/aviso/' + reuniao.IDReuniao + '/' + participante.IDPerfil, {
            method: 'POST',
          });

          const jsonData = {
            NomeParticipante: participante.NomeCompleto,
            NomeProjeto : reuniao.IDNegocio,
            Assunto : reuniao.Assunto,
            HoraReuniao: reuniao.horameeting,
            LocalReuniao : reuniao.LocalReuniao,
          };
          //console.log("jsonData: ",jsonData)
          await fetch('https://softapp.onrender.com/api/aviso/email/'+ participante.Email,  {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
          });
          
        }
      }
    }
  } catch (error) {
    console.error('Erro ao consultar reuniões:', error.message);
  }
});

process.stdin.resume();