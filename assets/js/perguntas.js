/* =============================================
   PERGUNTAS (FAQ) PAGE — SCRIPTS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  // --- Accordion Toggle with ARIA ---
  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion__trigger');
    const content = item.querySelector('.accordion__content');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherTrigger = otherItem.querySelector('.accordion__trigger');
        const otherContent = otherItem.querySelector('.accordion__content');
        otherTrigger.setAttribute('aria-expanded', 'false');
        otherContent.setAttribute('aria-hidden', 'true');
        otherContent.style.maxHeight = null;
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // --- Form Submission with Toast ---
  const form = document.querySelector('.register-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const tel = document.getElementById('tel').value;
      const email = document.getElementById('email').value;

      if (nome && tel && email) {
        showToast(`Cadastro realizado com sucesso! Bem-vindo, ${nome}!`, 'success');
        form.reset();
      }
    });
  }
});
