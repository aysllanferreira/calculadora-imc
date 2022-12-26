const getPeso = document.querySelector('#peso');
const getAltura = document.querySelector('#altura');
const getBtn = document.querySelector('#btn-calcular');

const verifyInputs = () => {
  switch (true) {
    case getPeso.value === '':
      alert('Preencha o campo peso');
      break;
    case getAltura.value === '':
      alert('Preencha o campo altura');
      break;
    case getPeso.value <= 0:
      alert('Preencha o campo peso com um número maior que 0');
      break;
    case getAltura.value <= 0:
      alert('Preencha o campo altura com um número maior que 0');
      break;
    case getPeso.value > 600:
      alert('Preencha o campo peso com um peso coerente');
      break;
    case getAltura.value > 2.8:
      alert('Preencha o campo altura com uma altura coerente');
      break;
    default:
      return true;
  }
};

const calculateIMC = (event) => {
  event.preventDefault();
  const getImcSpan = document.querySelector('#imc');
  const getClassificacaoSpan = document.querySelector('#classificacao');

  if (verifyInputs()) {
    const imc = +getPeso.value / (+getAltura.value * +getAltura.value);
    const classificacao =
      imc < 18.5
        ? 'Magreza'
        : imc < 24.9
        ? 'Normal'
        : imc < 30
        ? 'Sobrepeso'
        : imc < 39.9
        ? 'Obesidade'
        : 'Obesidade Grave';
    getImcSpan.innerHTML = imc.toFixed(2);
    getClassificacaoSpan.innerHTML = classificacao;

    getPeso.value = '';
    getAltura.value = '';
  }
};

window.onload = () => {
  getBtn.addEventListener('click', calculateIMC);
};
