//Função para ativar o modo noturno

function darkMode(toggle){
  if (toggle == 2){
    document.getElementById('body').className = 'body'
    
  } else{
    document.getElementById('body').className = 'body2'
  }
}

  // Função para aumentar a fonte
function toUpper(size){
  if(document.getElementById('big').innerHTML == 'A+'){
    document.getElementById('body').style.fontSize = '1.45em'
    document.getElementById('equipe').style.margin = '100px auto'
    document.getElementById('big').innerHTML = 'A-'
  } else {
    document.getElementById('body').style.fontSize = '1.1em'
    document.getElementById('equipe').style.margin = '80px auto'
    document.getElementById('big').innerHTML = 'A+'
  }
}
  // funcao adicionando data ao footer 
			// Função para formatar 1 em 01
			const zeroFill = n => {
				return ('0' + n).slice(-2);
			}

			// Cria intervalo
			const interval = setInterval(() => {
				// Pega o horário atual
				const now = new Date();

				// Formata a data conforme dd/mm/aaaa hh:ii:ss
				const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    //exibe na tela usando a div#data-hora
    document.getElementById('data-hora').innerHTML = dataHora;
  }, 1000)


  /* CADASTRO */
// DEIXAR A LETRA MAIUSCULA
function maisculaNome() {
  var nome = document.getElementById("name");
  nome.value = nome.value.toUpperCase();
}

function maiusculaSobrenome() {
  var nome = document.getElementById("lastname");
  nome.value = nome.value.toUpperCase();
}

//VALIDAÇÃO DA IDADE
function validadata() {
  var data = document.getElementById("nascimento").value;
  data = data.replace(/\//g, "-");
  var data_array = data.split("-");

  if (data_array[0].length != 4) {
    data = data_array[2] + "-" + data_array[1] + "-" + data_array[0];
  }

  var hoje = new Date();
  var nasc = new Date(data);
  var idade = hoje.getFullYear() - nasc.getFullYear();
  var m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

  if (idade > 130) {
    alert("Essa idade não é permitida para cadastro");
    return false;
  }

  if (idade >= 0 && idade <= 130) {
    return true;
  }

  return false;
}

//VALIDAÇÃO DE CPF
function VerificaCPF() {
  strCpf = document.getElementById('cpf').value;
  
  var soma = 0;
  var resto;
  
  if (strCpf == "00000000000" || strCpf.length != 11) {
      alert("CPF Inválido");
      return false;
  }

  for (i = 1; i <= 9; i++) {
      soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
  }

  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
      resto = 0;
  } else {
      resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(9, 10))) {
      alert("CPF Válido");
      return false;
  }

  soma = 0;

  for (i = 1; i <= 10; i++) {
      soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
  }

  resto = soma % 11;

  if (resto == 10 || resto == 11 || resto < 2) {
      resto = 0;
  } else {
      resto = 11 - resto;
  }

  if (resto != parseInt(strCpf.substring(10, 11))) {
      alert("CPF Inválido");
      return false;
  }
  alert("CPF VÁLIDO");
  return true;
  }

//VALIDAÇÃO E-MAIL
function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );
  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    document.getElementById("msgemail").innerHTML = "E-mail válido";
    alert("email valido");
  } else {
    document.getElementById("msgemail").innerHTML =
      "<font color='red'>Email inválido </font>";
    alert("E-mail invalido");
  }
}

  /* FIM PARTE DE CADASTRO */

  /* CONVERSOR DE MOEDAS */ 
  //pega o valor do input e exibe erro se nº < 0
      function conversao(){ 
        var valor = document.getElementById('valorInput').value; 
        if(valor < 0){
          alert("Digite um valor válido!")
        }
        var valorFloat = parseFloat(valor)
        
        //pega o valor do select 1 e 2, verifica se moeda é valida
        var select1 = document.getElementById('moedaOrigem').value;
        var select2 = document.getElementById('moedaDestino').value;
        if(select1 == '0' || select2 == '0'){
          alert('Escolha uma moeda')
        }
        if(select1 == select2){
          alert('Escolha duas moedas diferentes')
        }
        
        //cálculo de conversão
        let resultado = (valorFloat * select1) / select2;

        //imprime no HTML
        document.getElementById('conversao').innerHTML = `O valor de ${valorFloat.toFixed(2)} convertido, fica: ${resultado.toFixed(2)} `
      }

      //Funções que iniciam as calculadoras
      function calcNormal(){
        if(document.getElementById('normal').innerText = 'Normal'){
          document.getElementById('calculadora').style.display = 'block'
          document.getElementById('normal').innerText = 'Ocultar'
        } 
      }

      /* inicio calculadora CIENTÍFICA */ 
      var button = document.querySelectorAll('button');
      function calcular(tipo, valor){ 
        if ( tipo === 'acao'){ 
          if ( valor === 'c'){ 
            document.getElementById('resultado').value = ' '
          }
          if ( valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){ 
            document.getElementById('resultado').value += valor
          }
          if(valor === '***'){
            document.getElementById('resultado').value =' 3.14'
          }
          if(valor === '2'){
            let pot2 = document.getElementById('resultado').value;
            document.getElementById('resultado').value = pot2 * pot2;
          }          
          if(valor === '3'){
            let pot3 = document.getElementById('resultado').value;
            document.getElementById('resultado').value = (pot3 * pot3)*pot3;
          }          
          if(valor === '4'){
            let sqrt = document.getElementById('resultado').value;
            document.getElementById('resultado').value = Math.sqrt(sqrt)
          }          
          if ( valor === '='){ 
            var valorCampo = eval(document.getElementById('resultado').value);
            document.getElementById('resultado').value = valorCampo;
          }
        } else if (tipo === 'valor') { 
          document.getElementById('resultado').value += valor
        }
      }
      
      /* inicio calculadora NORMAL */ 
        var button = document.querySelectorAll('button');
        function calcular2(tipo, valor){ 
          if ( tipo === 'acao'){ 
            if ( valor === 'c'){ 
              document.getElementById('resultado2').value = ' '
            }
            if ( valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){ 
              document.getElementById('resultado2').value += valor
            }
            if ( valor === '='){ 
              var valorCampo = eval(document.getElementById('resultado2').value);
              document.getElementById('resultado2').value = valorCampo;
            }
          } else if (tipo === 'valor') { 
            document.getElementById('resultado2').value += valor
          }
        }