document.addEventListener('DOMContentLoaded', () => {
    const veiculos = [
        { id_veiculo: 1, placa: 'ABC-1234', modelo: 'Fiat Uno', cor: 'Vermelho', cliente: 'João Silva' },
        { id_veiculo: 2, placa: 'DEF-5678', modelo: 'Honda Civic', cor: 'Preto', cliente: 'Maria Souza' },
        { id_veiculo: 3, placa: 'GHI-9012', modelo: 'Toyota Corolla', cor: 'Branco', cliente: 'Carlos Pereira' },
        { id_veiculo: 4, placa: 'JKL-3456', modelo: 'Ford Ka', cor: 'Azul', cliente: 'Ana Oliveira' },
        { id_veiculo: 5, placa: 'MNO-7890', modelo: 'Chevrolet Onix', cor: 'Prata', cliente: 'Paulo Santos' },
        { id_veiculo: 6, placa: 'PQR-1234', modelo: 'Renault Sandero', cor: 'Cinza', cliente: 'Fernanda Costa' },
        { id_veiculo: 7, placa: 'STU-5678', modelo: 'Volkswagen Gol', cor: 'Verde', cliente: 'Lucas Martins' }
    ];

    const veiculosContainer = document.getElementById('veiculos-container');

    veiculos.forEach(veiculo => {
        const veiculoElement = document.createElement('div');
        veiculoElement.classList.add('veiculo');

        veiculoElement.innerHTML = `
            <p>ID: ${veiculo.id_veiculo}</p>
            <p>Placa: ${veiculo.placa}</p>
            <p>Modelo: ${veiculo.modelo}</p>
            <p>Cor: ${veiculo.cor}</p>
            <p>Cliente: ${veiculo.cliente}</p>
        `;

        veiculosContainer.appendChild(veiculoElement);
    });
});
