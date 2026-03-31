import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1774979200635 implements MigrationInterface {
    name = 'Init1774979200635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`reservation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`startDate\` datetime NOT NULL, \`endDate\` datetime NOT NULL, \`userId\` int NOT NULL, \`placeId\` int NOT NULL, \`invoiceId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`reservation\``);
    }

}
