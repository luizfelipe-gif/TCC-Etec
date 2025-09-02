/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Db1756245906509 {
    name = 'Db1756245906509'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`cbo\` (\`codigo\` varchar(4) NOT NULL, \`descricao\` varchar(255) NOT NULL, PRIMARY KEY (\`codigo\`)) ENGINE=InnoDB`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`cbo\``);
    }
}
