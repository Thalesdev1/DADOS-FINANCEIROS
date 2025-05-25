// Dados iniciais
const financialData = {
    incomes: [],
    expenses: []
};

// Carrega dados do LocalStorage
function loadData() {
    const savedData = localStorage.getItem('financialData');
    if (savedData) {
        Object.assign(financialData, JSON.parse(savedData));
    }
    updateDashboard();
}

// Salva dados no LocalStorage
function saveData() {
    localStorage.setItem('financialData', JSON.stringify(financialData));
}

// Atualiza a dashboard
function updateDashboard() {
    const totalIncome = financialData.incomes.reduce((sum, item) => sum + item.value, 0);
    document.querySelector('.value.income').textContent = `R$ ${totalIncome.toFixed(2)}`;
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    
    // Exemplo: Adicionar uma receita
    financialData.incomes.push({
        id: Date.now(),
        description: "Salário",
        value: 3000,
        date: new Date().toLocaleDateString()
    });
    
    saveData();
    updateDashboard();
});