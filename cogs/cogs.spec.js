const cogs = require('./cogs-modules.js/index.js.js');
const db = require('../data/dbConfig.js');

describe('cogs model', () => {
    //Clean table before run each test:
    beforeEach(async () => {
        await db('cogs').truncate();
    })

    //testing the environment
    it('should set the environment to testing', () => {

        expect(process.env.DB_ENV).toBe('testing')//knexfile.js line 20 
    });

    //creating a cog
    describe('insert()', () => {
        it('should insert cogs into the db', async () => {
            await cogs.insert({ name: 'LargeCog' });
            let cogs = await db('cogs');
            expect(cogs).toHaveLength(1);
        });
        //Checking to see what is returned after insertion
        it('should insert cogs into the db', async () => {
            //insert a record
            const [id] = await cogs.insert({ name: 'LargeCog' });
            //checking against the database
            let cog = await db('cogs')
                .where({ id })
                .first()

            //assert the record was inserted
            // expect(cog.name).toBe('Thomas');
            expect(cog.name).toBe('LargeCog');

        });
    });

    //removing a cog:
    describe('del()', () => {
        it('should remove cog from db', async () => {
          await cogs.remove({
              name: 'LargeCog'
          })
          let cogs = await db('cogs');
            //expect(cogs).toHaveLength(2);//failed--> Check false positive
            expect(cogs).toHaveLength(0)//Works
        })
    })


})