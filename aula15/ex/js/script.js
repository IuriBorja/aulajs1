const num = +prompt('Digite um número:');
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = num;


texto.innerHTML = '';

texto.innerHTML += `<p>Seu número + 2 é ${num + 2}.</p>`;

texto.innerHTML += `<p>Raiz quadrada: ${num ** 2}</p>`;

texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}.</p>`;

texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;

texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;

texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;

texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}.</p>`;


