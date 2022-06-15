'use strict'

let tarefas = [];

const getTarefas = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setTarefas = (tarefas) => localStorage.setItem('todoList', JSON.stringify(tarefas)); 

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value"X" data-indice=${indice}>
    `
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild) {
        todoList.removeChild(todoList.lastChild)
    }
}

const atualizarTela = () => {
    limparTarefas();
    const tarefas = getTarefas();
    tarefas.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
}

const adicionarItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if(tecla === 'Enter') {
        const tarefas = getTarefas();
        tarefas.push({'tarefa': texto, 'status': ''});
        setTarefas(tarefas)
        atualizarTela();
        evento.target.value = '';
    }
}

const removerItem = (indice) => {
    const tarefas = getTarefas();
    tarefas.splice(indice, 1);
    setTarefas(tarefas);
    atualizarTela();
}

const atualizarItem = (indice) => {
    const tarefas = getTarefas();
    tarefas[indice].status = tarefas[indice].status === '' ? 'checked' : '';
    setTarefas(tarefas);
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if(elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem(indice);
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
}

document.getElementById('novoItem').addEventListener('keypress', adicionarItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();