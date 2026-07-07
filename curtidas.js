const feedJSON = require('./feed.json');

function curtir(feed, id) {
    const post = feed[0].id === id ? feed[0] :
                feed[1].id === id ? feed[1] : feed[2];
}
//Começa aqui a nossa aula de hoje 06/07 - NÃO ESCREVER ESTA LINHA
if(!post) {
    console.log("Post não encontrado.");
    return;
}

if (!post.publicado) {
    console.log("Não é possível curtir este post.");
    return; //Vai verificar e para o processo
}

post.metricas.curtidas++;
console.log(`❤️ Post de @${post.autor} agora tem ${post.metricas.curtidas}curtidas.`);

//Remove uma curtida, para não deixar abaixo de zero
function descurtir(feed, id) {
    const post = feed[0].id === id ? feed[0] : feed[1].id === id ? feed[1] : feed[2];
}

if (post.metricas.curtidas === 0) { //Caso as curtidas fiquem em zero
    console.log("Este post já está com 0 curtidas");
    return;
}

post.metricas.curtidas++;
console.log(' curitida removida. total: ${post.metricas.curitidas}')
}

curtir(feedJSON, 1);