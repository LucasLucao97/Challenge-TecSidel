document.addEventListener('DOMContentLoaded', () => {
    const vagas = [
        { id_vaga: '01-a1', id_veiculo: null, data: '2024/05/18 08:00', status: true },
        { id_vaga: '02-a1', id_veiculo: 1, data: '2024/05/18 08:15', status: false },
        { id_vaga: '03-a2', id_veiculo: null, data: '2024/05/18 09:00', status: true },
        { id_vaga: '04-a2', id_veiculo: 2, data: '2024/05/18 09:15', status: false },
        { id_vaga: '05-b1', id_veiculo: null, data: '2024/05/18 10:00', status: true },
        { id_vaga: '06-b1', id_veiculo: 3, data: '2024/05/18 10:15', status: false },
        { id_vaga: '07-b2', id_veiculo: null, data: '2024/05/18 11:00', status: true },
        { id_vaga: '08-b2', id_veiculo: 4, data: '2024/05/18 11:15', status: false },
        { id_vaga: '09-c1', id_veiculo: null, data: '2024/05/18 12:00', status: true },
        { id_vaga: '10-c1', id_veiculo: 5, data: '2024/05/18 12:15', status: false },
        { id_vaga: '11-c2', id_veiculo: null, data: '2024/05/18 13:00', status: true },
        { id_vaga: '12-c2', id_veiculo: 6, data: '2024/05/18 13:15', status: false },
        { id_vaga: '13-a1', id_veiculo: null, data: '2024/05/18 14:00', status: true },
        { id_vaga: '14-a1', id_veiculo: 7, data: '2024/05/18 14:15', status: false },
        { id_vaga: '15-a2', id_veiculo: null, data: '2024/05/18 15:00', status: true },
    ];

    const vagasContainer = document.getElementById('vagas-container');

    vagas.forEach(vaga => {
        const vagaElement = document.createElement('div');
        vagaElement.classList.add('vaga');

        const statusElement = document.createElement('div');
        statusElement.classList.add('vaga-status');

        const statusIndicator = document.createElement('div');
        statusIndicator.classList.add('status');
        statusIndicator.classList.add(vaga.status ? 'status-livre' : 'status-ocupado');

        statusElement.appendChild(statusIndicator);
        statusElement.innerHTML += `Vaga: ${vaga.id_vaga}`;

        vagaElement.appendChild(statusElement);
        vagasContainer.appendChild(vagaElement);
    });
});
