import app from './app.js';

const PORT = process.env.PORT || 3000;

// escutar a porta 3000
        
app.listen(PORT, () =>{
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});

app.get('/', (req, res)=>{
    res.send(`Utilize o Insomnia para comunicar com essa API REST! 
    Para ver a listagem de todas as seleções: localhost:3000/selecoes. 
    Para ver uma única seleção: localhost:3000/selecoes/id_da_selecao. 
    Para criar uma outra seleção, envie o seguinte request: localhost:3000/selecoes. Então, utilize o corpo JSON na forma de objeto -> destacando o nome da seleção e o seu grupo
    Para apagar uma seleção, envie o seguinte request: localhost:3000/selecoes/id_da_selecao.
    Para atualizar uma seleção, envie o seguinte request: localhost:3000/selecoes/id_da_selecao. Então, no campo JSON na forma de objeto -> destaque o nome da seleção e o seu grupo.`);
});

