document.getElementById('encrypt-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const encryptedText = encryptText(text);
    document.getElementById('text-output').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const decryptedText = decryptText(text);
    document.getElementById('text-output').value = decryptedText;
});

document.getElementById('encrypt-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const encryptedText1 = encryptText(text);
    const encryptedText2 = 'Otro texto adicional'; // Podrías generar o usar un texto adicional

    document.getElementById('text-output1').innerText = encryptedText1;
    document.getElementById('text-output2').innerText = encryptedText2;

    // Si quieres cambiar la imagen, puedes hacerlo así:
    document.getElementById('output-image').src = 'nueva/ruta/de/tu/imagen.jpg';
    document.getElementById('output-image').alt = 'Nueva descripción de la imagen';
});

function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Evento para borrar el texto del output si el input está vacío
document.getElementById('text-input').addEventListener('input', function() {
    if (this.value === '') {
        document.getElementById('text-output').value = '';
    }
});

function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
