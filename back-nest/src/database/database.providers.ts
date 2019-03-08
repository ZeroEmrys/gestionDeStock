import { DB_PROVIDER } from './../constants';
import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: DB_PROVIDER,
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
          //  mongoose.set('useFindAndModify', false);

            return await mongoose.connect('mongodb://localhost:27017/project');

        },
    },
];