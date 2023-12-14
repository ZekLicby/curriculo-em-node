const db = require('../config/dataBase');

const createCurriculoTable = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS curriculos (
        id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        personalDescription VARCHAR NOT NULL,
        age INTEGER,
        companiesExp VARCHAR,
        linkedin VARCHAR
      )
    `;
    await db.query(createTableQuery);
    console.log('Tabela de currículos criada com sucesso!');
  } catch (error) {
    console.error('Tabela não pode ser criada:', error);
  }
};

const insertCurriculo = async (curriculoData) => {
  try {
    const insertQuery = `
      INSERT INTO curriculos (name, personalDescription, age, companiesExp, linkedin)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const { name, personalDescription, age, companiesExp, linkedin } = curriculoData;
    await db.query(insertQuery, [name, personalDescription, age, companiesExp, linkedin]);
    console.log('Curriculo criado!');
  } catch (error) {
    console.error('curriculo não pode ser criado:', error);
  }
};

const getAllCurriculos = async () => {
  try {
    const selectAllQuery = 'SELECT * FROM curriculos';
    const result = await db.query(selectAllQuery);
    return result.rows;
  } catch (error) {
    console.error('nenhum curriculo encontrado:', error);
    return [];
  }
};

const updateCurriculo = async (id, newData) => {
    try {
      const updateQuery = `
        UPDATE curriculos
        SET name = $1, training_level = $2, age = $3, current_company = $4, portfolio_web = $5
        WHERE id = $6
      `;
      const { name, personalDescription, age, companiesExp, linkedin } = newData;
      await db.query(updateQuery, [name, personalDescription, age, companiesExp, linkedin, id]);
      console.log('o curriculo foi atualizado!');
    } catch (error) {
      console.error('o curriculo não pode ser atualizado:', error);
    }
  };
  
  const deleteCurriculo = async (id) => {
    try {
      const deleteQuery = 'DELETE FROM curriculos WHERE id = $1';
      await db.query(deleteQuery, [id]);
      console.log('curriculo deletado!');
    } catch (error) {
      console.error('curriculo não pode ser deletado:', error);
    }
  };

module.exports = {
  createCurriculoTable,
  insertCurriculo,
  getAllCurriculos,
  updateCurriculo,
  deleteCurriculo,
};
