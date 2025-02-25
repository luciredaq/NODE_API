import cron from 'node-cron'


console.log("Iniciando agendamento de tarefas");

cron.schedule("* * * * *", () => {
    console.log("executando tarefa");
})