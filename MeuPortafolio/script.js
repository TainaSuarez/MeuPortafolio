document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.querySelector('.toggle-theme'); // Botão de alternar tema
  const htmlElement = document.documentElement; // Elemento <html>
  const icon = themeToggleBtn.querySelector("i"); // Ícone do botão

  // Carregar o tema salvo no localStorage
  const savedTheme = localStorage.getItem("theme") || "light"; // Tema padrão é "light"
  htmlElement.setAttribute("data-theme", savedTheme); // Aplica o tema salvo no <html>
  updateIcon(savedTheme, icon); // Atualiza o ícone do botão

  // Alternar tema ao clicar no botão
  themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      htmlElement.setAttribute("data-theme", newTheme); // Aplica o novo tema no <html>
      localStorage.setItem("theme", newTheme); // Salva o novo tema no localStorage
      updateIcon(newTheme, icon); // Atualiza o ícone do botão
  });

  // Atualiza o ícone com base no tema
  function updateIcon(theme, icon) {
      if (theme === "dark") {
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
      } else {
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");
      }
  }
});
document.getElementById("baixarCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "cv.pdf";  // Ruta correcta del archivo
    link.download = "PaulaSuarezCv.pdf";  // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

 