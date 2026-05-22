function handleCalor() {
    const to = parseFloat(document.getElementById('to').value);
    const ts = parseFloat(document.getElementById('ts').value);
    const k = parseFloat(document.getElementById('k').value);
    const t = parseFloat(document.getElementById('t_calor').value);

    if (isNaN(to) || isNaN(ts) || isNaN(k) || isNaN(t)) {
        alert("Por favor ingrese valores válidos.");
        return;
    }

    const tempFinal = ts + (to - ts) * Math.exp(-k * t);
    
    document.getElementById('resCalor').innerText = 
        `Resultado Final: ${Math.round(tempFinal)}°C`;
}

function factorialPropio(num) {
    if (num < 0) return 0;
    let r = 1;
    for (let i = 2; i <= num; i++) r *= i;
    return r;
}

function combinacion(n, r) {
    if (r > n) return 0;
    return factorialPropio(n) / (factorialPropio(r) * factorialPropio(n - r));
}

function handleSorteo() {
    const n1 = parseInt(document.getElementById('n1').value);
    const r1 = parseInt(document.getElementById('r1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const r2 = parseInt(document.getElementById('r2').value);

    if (r1 > n1 || r2 > n2) {
        document.getElementById('resCombo').innerText = "Error: r no puede ser mayor a n";
        return;
    }

    if (isNaN(n1) || isNaN(r1) || isNaN(n2) || isNaN(r2)) {
        alert("Complete todos los campos del sorteo.");
        return;
    }

    const total = combinacion(n1, r1) * combinacion(n2, r2);
    
    document.getElementById('resCombo').innerText = 
        `Total de Combinaciones: ${total.toLocaleString()}`;
}