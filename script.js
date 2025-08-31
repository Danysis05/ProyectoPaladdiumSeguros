document.addEventListener("DOMContentLoaded", () => {
  const seguros = document.querySelectorAll(".seguro");
  const modales = document.querySelectorAll(".modal");
  const cerrarBtns = document.querySelectorAll(".cerrar");

  // Abrir modal
  seguros.forEach(seguro => {
    seguro.addEventListener("click", () => {
      const id = seguro.getAttribute("data-id");
      const modal = document.getElementById(`info-${id}`);
      if(modal){
        modal.classList.remove("hidden");
      }
    });
  });

  // Cerrar modal
  cerrarBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      btn.closest(".modal").classList.add("hidden");
    });
  });

  // Cerrar al hacer click fuera del modal
  modales.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if(e.target === modal){
        modal.classList.add("hidden");
      }
    });
  });
});
