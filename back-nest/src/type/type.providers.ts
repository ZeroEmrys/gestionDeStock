import { TYPE_MODEL_PROVIDER } from './../constants';
import { Connection } from 'mongoose';
import { DB_PROVIDER} from '../constants';
import { TypeSchema } from './schema/type.schema';

export const typeProviders = [
    {
        provide: TYPE_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Type', TypeSchema),
        inject: [DB_PROVIDER],
    },
];