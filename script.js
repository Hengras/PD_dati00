let vielas = [];
let inventars = [];

async function ieladetDatus() {
  const vielasAtbilde = await fetch('vielas.json');
  vielas = await vielasAtbilde.json();

  const inventarsAtbilde = await fetch('inventars.json');
  inventars = await inventarsAtbilde.json();

  filtrēt('visi'); // Pēc noklusējuma rādīt visu
}

function filtrēt(koRādīt) {
  let dati = [];

  if (koRādīt === 'vielas') {
    dati = vielas;
  } else if (koRādīt === 'inventars') {
    dati = inventars;
  } else {
    dati = [...vielas, ...inventars];
  }

  attelotTabulā(dati);
}

function attelotTabulā(dati) {
  const tbody = document.querySelector('#datuTabula tbody');
  tbody.innerHTML = '';

  dati.forEach(el => {
    const rinda = document.createElement('tr');
    rinda.innerHTML = `
      <td>${el.nosaukums}</td>
      <td>${el.tips}</td>
      <td>${el.skaits || el.daudzums + ' ' + (el.mervienibas || '')}</td>
      <td>${el.komentari}</td>
    `;
    tbody.appendChild(rinda);
  });
}

ieladetDatus();
