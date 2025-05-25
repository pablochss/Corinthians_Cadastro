function enviar() {
    event.preventDefault();

    Swal.fire({
        title: "Parabéns",
        text: "Você acabou de se cadastrar no site do Corinthians!",
        icon: "success"
      });
}