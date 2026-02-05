const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");

const rValue = document.getElementById("rValue");
const gValue = document.getElementById("gValue");
const bValue = document.getElementById("bValue");

const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

function toHex(value) {
    let hex = Number(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

/* Convertir HEX a RGB */
function hexToRgb(hex) {
    let r = parseInt(hex.substring(1,3), 16);
    let g = parseInt(hex.substring(3,5), 16);
    let b = parseInt(hex.substring(5,7), 16);
    return {r, g, b};
}

function updateColor(r, g, b) {

    r = Number(r);
    g = Number(g);
    b = Number(b);

    // Validar rango
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // Sincronizar sliders
    red.value = r;
    green.value = g;
    blue.value = b;

    // Sincronizar inputs
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    // Mostrar valores
    rValue.textContent = r;
    gValue.textContent = g;
    bValue.textContent = b;

    // RGB
    let rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbText.textContent = rgb;

    // HEX
    let hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    hexText.textContent = hex;

    // Sincronizar color picker
    colorPicker.value = hex;
}

/* Eventos sliders */
red.addEventListener("input", () => {
    updateColor(red.value, green.value, blue.value);
});

green.addEventListener("input", () => {
    updateColor(red.value, green.value, blue.value);
});

blue.addEventListener("input", () => {
    updateColor(red.value, green.value, blue.value);
});

/* Eventos inputs numéricos */
redInput.addEventListener("input", () => {
    updateColor(redInput.value, greenInput.value, blueInput.value);
});

greenInput.addEventListener("input", () => {
    updateColor(redInput.value, greenInput.value, blueInput.value);
});

blueInput.addEventListener("input", () => {
    updateColor(redInput.value, greenInput.value, blueInput.value);
});

/* Evento color picker */
colorPicker.addEventListener("input", () => {

    let rgb = hexToRgb(colorPicker.value);
    updateColor(rgb.r, rgb.g, rgb.b);

});

/* Inicializar */
updateColor(0, 0, 0);
