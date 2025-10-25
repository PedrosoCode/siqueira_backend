const conn = require('../db/conn');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


const selecionarHorarios = async (req, res) => {
  try {
    const { data } = req.body;

    const sql = `
      SELECT * FROM fn_agendamento_select_horario(:p_data)
    `;

    const [rows] = await conn.query(sql, { 
      replacements: {
        p_data: data
      }
    });

    const agendamentos = rows[0];
    if (!agendamentos) {
      return res.status(200).json({ message: 'Sem agendamentos para o dia!' });
    }

    res.status(200).json({ rows });

  } catch (err) {
    console.error('Erro ao logar usuário:', err);
    res.status(500).json({ error: 'Erro ao logar usuário no banco de dados.' });
  }
};

module.exports = {
  selecionarHorarios
};