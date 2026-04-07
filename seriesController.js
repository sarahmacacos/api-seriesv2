const series = [
{
    id: 1,
    titulo: 'Stranger Things',
    genero: 'Ficção Científica',
    ano: 2016
},
{
    id: 2,
    titulo: 'Breaking Bad',
    genero: 'Drama',
    ano: 2008
},
{
    id: 3,
    titulo: 'Game of Thrones',
    genero: 'Fantasia',
    ano: 2011
},
{
    id: 4,
    titulo: 'The Walking Dead',
    genero: 'Terror',
    ano: 2010
},
{
    id: 5,
    titulo: 'Dark',
    genero: 'Ficção Científica',
    ano: 2017
},
{
    id: 6,
    titulo: 'Friends',
    genero: 'Comédia',
    ano: 1994
},
{
    id: 7,
    titulo: 'The Office',
    genero: 'Comédia',
    ano: 2005
},
{
    id: 8,
    titulo: 'Black Mirror',
    genero: 'Ficção Científica',
    ano: 2011
},
{
    id: 9,
    titulo: 'Euphoria',
    genero: 'Drama',
    ano: 2019
},
{
    id: 10,
    titulo: 'The Witcher',
    genero: 'Fantasia',
    ano: 2019
}];
function listarSeries(req, res) {
  return res.status(200).json(series);
}

function buscarSerie(req, res) {
  const id = Number(req.params.id);
  const encontrada = series.find(s => s.id === id);

  if (!encontrada) {
    return res.status(404).json({ erro: 'Serie nao encontrada.' });
  }

  return res.status(200).json(encontrada);
}

function criarSerie(req, res) {
  const { titulo, genero, ano } = req.body;

  if (!genero) return res.status(400).json({ erro: 'O campo genero e obrigatorio.' });
  if (ano === undefined) return res.status(400).json({ erro: 'O campo ano e obrigatorio.' });

  const novoId = series.length ? Math.max(...series.map(s => s.id)) + 1 : 1;

  const novaSerie = { id: novoId, titulo, genero, ano };
  series.push(novaSerie);

  return res.status(201).json(novaSerie);
}

function atualizarSerie(req, res) {
  const id = Number(req.params.id);
  const { titulo, genero, ano } = req.body;

  const idx = series.findIndex(s => s.id === id);
  if (idx === -1) {
    return res.status(404).json({ erro: 'Serie nao encontrada.' });
  }

  // se quiser obrigar titulo no PUT:
  if (!titulo) return res.status(400).json({ erro: 'O campo titulo e obrigatorio.' });

  series[idx] = {
    ...series[idx],
    titulo: titulo ?? series[idx].titulo,
    genero: genero ?? series[idx].genero,
    ano: ano ?? series[idx].ano,
  };

  return res.status(200).json(series[idx]);
}

function deletarSerie(req, res) {
  const id = Number(req.params.id);
  const idx = series.findIndex(s => s.id === id);

  if (idx === -1) {
    return res.status(404).json({ erro: 'Serie nao encontrada.' });
  }

  series.splice(idx, 1);
  return res.status(204).send();
}

module.exports = {
  listarSeries,
  buscarSerie,
  criarSerie,
  atualizarSerie,
  deletarSerie,
};