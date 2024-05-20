document.addEventListener('DOMContentLoaded', () => {
    const dispositivos = [
        { id_dispositivo: 'CA-0001', id_estacionamento: 1, nome: 'gopro hero3', tipo: 'camera', local: 'entrada', ip: 192168001001, status: true },
        { id_dispositivo: 'SE-0001', id_estacionamento: 1, nome: 'Balluff BOSR090KT', tipo: 'sensor de barreira', local: 'vaga 01-a1', ip: 192168001002, status: false },
        { id_dispositivo: 'AN-0001', id_estacionamento: 1, nome: 'Antena RFID UHF circular Via onda', tipo: 'Antena', local: 'entrada', ip: 192168001003, status: true },
        { id_dispositivo: 'CC-0001', id_estacionamento: 1, nome: 'Cancela Automática', tipo: 'Cancela', local: 'entrada', ip: 192168001004, status: true },
        { id_dispositivo: 'CA-0002', id_estacionamento: 1, nome: 'Câmera de Segurança', tipo: 'camera', local: 'vaga 05-b1', ip: 192168001005, status: false },
        { id_dispositivo: 'SE-0002', id_estacionamento: 1, nome: 'Sensor Ultrassônico', tipo: 'sensor de barreira', local: 'vaga 10-c1', ip: 192168001006, status: true }
    ];

    const dispositivosContainer = document.getElementById('dispositivos-container');

    dispositivos.forEach(dispositivo => {
        const dispositivoElement = document.createElement('div');
        dispositivoElement.classList.add('dispositivo');

        const statusElement = document.createElement('div');
        statusElement.classList.add('dispositivo-status');

        const statusIndicator = document.createElement('div');
        statusIndicator.classList.add('status');
        statusIndicator.classList.add(dispositivo.status ? 'status-livre' : 'status-desligado');

        statusElement.appendChild(statusIndicator);
        statusElement.innerHTML += `ID: ${dispositivo.id_dispositivo}`;

        dispositivoElement.innerHTML = `
            ${statusElement.outerHTML}
            <p>Nome: ${dispositivo.nome}</p>
            <p>Tipo: ${dispositivo.tipo}</p>
            <p>Local: ${dispositivo.local}</p>
            <p>IP: ${dispositivo.ip}</p>
        `;

        dispositivosContainer.appendChild(dispositivoElement);
    });
});
