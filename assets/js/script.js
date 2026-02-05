const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

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

function updateColor() {
    let r = red.value;
    let g = green.value;
    let b = blue.value;

    // Mostrar valores
    rValue.textContent = r;
    gValue.textContent = g;
    bValue.textContent = b;

    // RGB
    let rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbText.textContent = rgb;

    // HEX
    let hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    hexText.textContent = hex.toUpperCase();
}

// Eventos
red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);
