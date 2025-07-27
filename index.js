let savedLink = null;

document.getElementById('setLinkBtn').addEventListener('click', function() {
    const input = prompt("Введіть посилання (URL):");

    if (input === null) {
        alert("Введення скасовано.");
        return;
    }

    const trimmed = input.trim();
    if (trimmed === "") {
        alert("Порожнє посилання не збережено.");
        return;
    }

    try {
        // Перевірка на коректність URL
        const url = new URL(trimmed);
        savedLink = url.href;
        alert("Посилання збережено: " + savedLink);
    } catch (e) {
        alert("Некоректне посилання.");
    }
});

document.getElementById('goToLinkBtn').addEventListener('click', function() {
    if (savedLink) {
        window.location.href = savedLink;
    } else {
        alert("Посилання ще не задано.");
    }
});