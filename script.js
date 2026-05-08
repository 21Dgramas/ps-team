document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = document.getElementById('login-btn');
    const btnText = btn.querySelector('.btn-text');
    const loader = document.getElementById('btn-loader');
    const statusMsg = document.getElementById('status-message');
    const username = document.getElementById('username').value;
    const key = document.getElementById('key').value;

    statusMsg.innerHTML = '';
    statusMsg.className = '';

    btn.disabled = true;
    btnText.style.opacity = '0';
    loader.style.display = 'block';

    setTimeout(() => {
        if (username.length < 3 || key.length < 4) {
            statusMsg.innerHTML = 'Credenciais inválidas ou incompletas.';
            statusMsg.className = 'error-msg';
            
            // Re-enable button
            btn.disabled = false;
            btnText.style.opacity = '1';
            loader.style.display = 'none';
        } else {
            statusMsg.innerHTML = 'Validando licença...';
            statusMsg.className = 'success-msg';

            setTimeout(() => {
                statusMsg.innerHTML = 'Injetando módulos...';
                
                setTimeout(() => {
                    statusMsg.innerHTML = 'ACESSO CONCEDIDO! Iniciando PS-TEAM...';
                    
                    setTimeout(() => {
                        alert('Acesso Concedido! O Cheat será iniciado em segundo plano.');
                        
                        btn.disabled = false;
                        btnText.style.opacity = '1';
                        loader.style.display = 'none';
                        statusMsg.innerHTML = 'Logado como ' + username;
                    }, 1500);
                }, 1500);
            }, 1500);
        }
    }, 2000);
});

console.log('%c PS-TEAM OFFICIAL %c AUTH SYSTEM LOADED ', 'background: #00b4ff; color: #000; font-weight: bold;', 'background: #121212; color: #fff;');
