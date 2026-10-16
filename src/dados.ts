import type { Tarefa } from './tipo';

export const tarefas: Tarefa[] = [
    {id: 1, titulo: "Estudar interfaces", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()}, 
    {id: 2, titulo: "Comprar café", prioridade: "alta", status: "em_andamento", tags: ["compras"], criadaEm: new Date()}, 
    {id: 3, titulo: "Aula de Python", prioridade: "baixa", status: "pendente", tags: ["estudo"], criadaEm: new Date()}, 
    {id: 4, titulo: "Praticar Typescript", prioridade: "media", status: "em_andamento", tags: ["estudo"], criadaEm: new Date()}, 
    {id: 5, titulo: "Revisar GIT", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()}, 
]
