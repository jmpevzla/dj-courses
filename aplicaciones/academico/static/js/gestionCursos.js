(function() {
    const btnEliminacion = document.querySelectorAll('.btnEliminacion');
    btnEliminacion.forEach(btn => {
        btn.addEventListener('click', (ev) => {
            const conf = confirm('¿Esta seguro de eliminar este curso?');
            if (!conf) {
                ev.preventDefault();
            }
        });
    });

    setTimeout(function() {
        const alerts = document.querySelectorAll('.alert-success');
        alerts.forEach(al => {
            al.remove();
        });
    }, 5000);
})();
