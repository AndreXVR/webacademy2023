export interface MigracaoDB {
    consultas?: Array<{ model: string, query: string }>
   }
   const migracoes: Map<number, MigracaoDB> = new Map<number, MigracaoDB>();
   // migracoes.set(1, {
   // consultas: [
   // {
   // model: 'Dependentes',
   // query: `ALTER TABLE "Dependentes" ALTER COLUMN name SET DATA TYPE
   //text;`,
   // },
   // ],
   // });
   export { migracoes };