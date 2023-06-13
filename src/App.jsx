import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(0);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
      setClassificacao('Obesidade grau 1');
    } else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <label htmlFor="altura">Altura (cm):</label>
      <input
        type="number"
        id="altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <label htmlFor="peso">Peso (kg):</label>
      <input
        type="number"
        id="peso"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular</button>
      <h2>IMC: {imc}</h2>
      <h2>Classificação: {classificacao}</h2>
    </div>
  );
}

export default App;