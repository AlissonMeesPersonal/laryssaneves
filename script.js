/* Comportamentos leves da landing page — sem dependências externas. */
(() => {
  "use strict";

  const WHATSAPP_NUMBER = "5551995033979";

  function whatsappUrl(message) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }

  // Cada CTA tem um texto específico, para identificar o interesse da visitante.
  document.querySelectorAll("a[data-whatsapp]").forEach((anchor) => {
    const message = anchor.getAttribute("data-whatsapp");
    if (message) anchor.href = whatsappUrl(message);
  });

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
      navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((anchor) => {
      anchor.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
      }
    });

    window.matchMedia("(min-width: 851px)").addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const name = form.elements.nome.value.trim().replace(/\s+/g, " ");
      const interest = form.elements.interesse.value;
      const details = form.elements.mensagem.value.trim();
      if (!name || !interest) return;

      const message = [
        "Olá, Laryssa! Vim pelo seu site.",
        "",
        "Meu nome: " + name,
        "Tenho interesse em: " + interest,
        details ? "Mensagem: " + details : "",
        "",
        "Pode me passar mais informações?"
      ].filter((item, index) => item !== "" || index === 1).join("\n");

      // Encaminha para o WhatsApp. Não armazena as informações enviadas no site.
      window.location.href = whatsappUrl(message);
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
