import { EntitySchema } from "typeorm";

const agente = new EntitySchema({
    name: "Agente",
    tableName: "agente",
    columns: {
        id: {primary: true, type: "int", generated: true},
        nome_agente: {type: "varchar", length: 100, nullable: false},
        cpf: {type: "varchar", length: 11, unique: true, nullable: false},
        email_institucional: {type: "varchar", length: 100, nullable: false},
        telefone: {type: "varchar", length: 11, nullable: false},
        data_admissao: {type: "date", nullable: false},
        data_demissao: {type: "date", nullable: true}
    },
    relations: {
        posto: {type: "many-to-one", target: "Posto", nullable: false},
        cbo: {type: "many-to-one", target: "Cbo", nullable: false}
    }
});

export default agente;