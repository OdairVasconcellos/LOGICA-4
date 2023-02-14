

function calcularmes(mes) {
    mes = mes
    var mes = Number(document.getElementById('mes').value);

    switch (mes) {

        case 01:
            alert("Este numero corresponde ao mes de Janeiro");
            break;
        case 02:
            alert("Este numero corresponde ao mes de Fevereiro");
            break;
        case 03:
            alert("Este numero corresponde ao mes de Março");
            break;
        case 04:
            alert("Este numero corresponde ao mes de Abril");
            break;
        case 05:
            alert("Este numero corresponde ao mes de Maio");
            break;
        case 06:
            alert("Este numero corresponde ao mes de Junho");
            break;
        case 07:
            alert("Este numero corresponde ao mes de Julho");
            break;
        case 08:
            alert("Este numero corresponde ao mes de Agosto");
            break;
        case 09:
            alert("Este numero corresponde ao mes de Setembro");
            break;
        case 10:
            alert("Este numero corresponde ao mes de Outubro");
            break;
        case 11:
            alert("Este numero corresponde ao mes de Novembro");
            break;
        case 12:
            alert("Este numero corresponde ao mes de Dezembro");
            break;

        default:
            alert("Voce esqueceu de informar um numero de 01 a 12");
    }

}

function conceitoaluno(conceito) {
    const resultado = conceito.toUpperCase();

    switch (resultado) {

        case "A":
            alert("Atendido");
            break;
        case "PA":
            alert("Parcialmente Atendido");
            break;
        case "NA":
            alert("Não Atendido");
            break;

        default:
            alert("Informe o Conceito Correto do Aluno.");

    }
}