function suporteN1(chamado){
    console.log("N1 Ta passano aqui")
    if (chamado.prioridade === "normal"){
        console.log("N1 assumiu chamado");
        return "Suporte N1 atendeu chefe";
    }
    console.log("N1 não conseguiu resolver o baguio");
    console.log("Encaminhou para o N2");
    return suporteN2(chamado);
};

function suporteN2(chamado){
    console.log("N2 Ta passano aqui")
    if (chamado.prioridade === "normal"){
        console.log("N2 assumiu chamado");
        return "Suporte N2 atendeu chefe";
    }
    console.log("N2 não conseguiu resolver o baguio");
    console.log("Encaminhou para o ESPECIALISTA");
    return especialista(chamado);
};
function especialista(chamado){
    console.log("Especialista Ta passano aqui")
    if (chamado.prioridade === "alta"){
        console.log("Especialista assumiu chamado");
        return "Especialista atendeu chefe";
    }
    throw new Error("Nenhum responsável encontrado!")
};

module.exports = {
    suporteN1
}