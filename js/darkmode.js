const darkmodeToggle = document.querySelector('[data-js="darkmode-input"]');

darkmodeToggle.addEventListener("change", () => {
  if (darkmodeToggle.checked) {
    document.body.classList.add("dark"); // Fügt die Klasse hinzu, wenn der Toggle aktiviert ist
  } else {
    document.body.classList.remove("dark"); // Entfernt die Klasse, wenn der Toggle deaktiviert ist
  }
});
