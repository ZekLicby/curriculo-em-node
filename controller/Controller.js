//Controller.js
const CurriculoModel = require('../model/Curriculo.js');

const criarTabelaCurriculos = async (_, res) => {
  await CurriculoModel.createCurriculoTable();
  res.status(200).json({ message: 'Tabela de currículos criada com sucesso!' });
};

const inserirCurriculo = async (req, res) => {
  const curriculoData = req.body;
  await CurriculoModel.insertCurriculo(curriculoData);
  res.status(201).json({ message: 'Currículo inserido com sucesso!' });
};

const obterTodosCurriculos = async (_, res) => {
  const curriculos = await CurriculoModel.getAllCurriculos();
  res.status(200).json(curriculos);
};

const atualizarCurriculo = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    await CurriculoModel.updateCurriculo(id, newData);
    res.status(200).json({ message: 'Currículo atualizado com sucesso!' });
  };
  
  const excluirCurriculo = async (req, res) => {
    const { id } = req.params;
    await CurriculoModel.deleteCurriculo(id);
    res.status(200).json({ message: 'Currículo excluído com sucesso!' });
  };
  

module.exports = {
  criarTabelaCurriculos,
  inserirCurriculo,
  obterTodosCurriculos,
  atualizarCurriculo,
  excluirCurriculo,
};
