import postgre from '../../database.js';

const livrosController = {
    registrarLivro: async(req, res) => {
        try {
            const {
                titulo, 
                autor, 
                finalizado,
                data_mes, 
                data_ano, 
                genero,
                categoria,
                formato_livro,
                observacoes
                } = req.body

            const sql = 'INSERT INTO livros(titulo, autor, finalizado, data_mes, data_ano, genero, categoria, formato_livro, observacoes) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *'
 
            const { rows } = await postgre.query(sql, [
                titulo, 
                autor, 
                finalizado,
                data_mes, 
                data_ano, 
                genero,
                categoria,
                formato_livro,
                observacoes])

            res.json({msg: "Livro Registrado com sucesso", data: rows[0]})

        } catch (error) {
            console.error(error);
            res.json({ msg: "Ocorreu um erro ao registrar livro" });
        }
    },
    todosLivros: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM livros ORDER BY titulo ASC")
            if (rows[0]) {
                return res.status(200).json({msg: "OK", data: rows})
            }
            // res.status(200).json({msg: "Não há encontros disponivel para o usuário"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    livrosLidos: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM livros WHERE finalizado = 'Sim' ORDER BY autor ASC")
            if (rows[0]) {
                return res.status(200).json({msg: "OK", data: rows})
            }
            // res.status(200).json({msg: "Não há encontros disponivel para o usuário"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    livrosNFinalizados: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM livros WHERE finalizado = 'Não' ORDER BY autor ASC")
            if (rows[0]) {
                return res.status(200).json({msg: "OK", data: rows})
            }
            // res.status(200).json({msg: "Não há encontros disponivel para o usuário"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    
    dataAnoMes: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT data_mes, data_ano FROM livros ORDER BY data_ano ASC")
            if (rows[0]) {
                return res.status(200).json({msg: "OK", data: rows})
            }
            // res.status(200).json({msg: "Não há encontros disponivel para o usuário"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    
  
}
export default livrosController;