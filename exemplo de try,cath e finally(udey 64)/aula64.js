function retonaHora(data) {
    if (data && !(data instanceof date)){
        throw new TypeError('esperando instância de date');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1971 12:58;12');
    const hora =retonaHora();
    console.log(hora);
}catch(e) {
    //tratar o error
    console.log(e);
}finally {
    console.log('tenha um bom dia');
}
