/* Funcionalidades de la página */
document.addEventListener("DOMContentLoaded", () => {
  const config = window.OBRA_CONFIG;
  const ticketLinks = document.querySelectorAll("#ticket-link, .mobile-buy");

  if (config?.enlaceEntradas) {
    ticketLinks.forEach((link) => {
      link.href = config.enlaceEntradas;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }

  // Asigna las direcciones de las redes sociales configuradas.
  document.querySelectorAll("[data-social]").forEach((link) => {
    const red = link.dataset.social;
    const url = config?.redesSociales?.[red];

    if (url) {
      link.href = url;
    } else {
      link.classList.add("social-link-pending");
      link.title = `Configura el enlace de ${red} en js/archivos.js`;
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });
});
