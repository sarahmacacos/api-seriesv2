const series = [
{
    id : 1,
    titulo : 'Stranger Things',
    genero : 'Ficção Científica',
    ano : 2016
},
{
    id : 2,
    titulo : 'Breaking Bad',
    genero : 'Drama',
    ano : 2008
},
{
    id : 3,
    titulo : 'Game of Thrones',
    genero : 'Fantasia',
    ano : 2011
    }
]
function criarSerie(req, res) {
  const { titulo, genero, ano } = req.body

  if (!titulo) {
    return res.status(400).json({ erro: 'O campo titulo e obrigatorio.' })
  }

  const novaSerie = {
    id: series.length + 1,
    titulo,
    genero: genero || null,
    ano: ano || null
  }

  series.push(novaSerie)
  return res.status(201).json(novaSerie)
}

function listarSeries(req, res) {
  return res.json(series)
}

function buscarSerie(req, res) {
  const id = Number(req.params.id)
  const serie = series.find((item) => item.id === id)

  if (!serie) {
    return res.status(404).json({ erro: 'Serie nao encontrada.' })
  }

  return res.json(serie)
}

module.exports = {
  criarSerie,
  listarSeries,
  buscarSerie
}