const express = require('express');
const CurriculoController = require('../controller/Controller.js');

const router = express.Router();

router.post('/criar-tabela', CurriculoController.criarTabelaCurriculos);
router.post('/criar', CurriculoController.inserirCurriculo);
router.get('/retornarTodos', CurriculoController.obterTodosCurriculos);
router.put('/atualizar/:id', CurriculoController.atualizarCurriculo);
router.delete('/excluir/:id', CurriculoController.excluirCurriculo);

module.exports = router;
