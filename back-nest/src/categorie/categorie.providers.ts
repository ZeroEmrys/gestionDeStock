import { CATEGORIE_MODEL_PROVIDER } from './../constants';
import { Connection } from 'mongoose';
import { DB_PROVIDER} from '../constants';
import { CategorieSchema } from './schema/categorie.schema';

export const categorieProviders = [
    {
        provide: CATEGORIE_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Categories', CategorieSchema),
        inject: [DB_PROVIDER],
    },
];