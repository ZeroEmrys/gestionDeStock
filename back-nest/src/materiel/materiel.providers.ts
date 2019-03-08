import { MaterielSchema } from './schema/materiel.schema';
import { MATERIEL_MODEL_PROVIDER } from './../constants';
import { Connection } from 'mongoose';
import { DB_PROVIDER} from '../constants';

export const materielProviders = [
    {
        provide: MATERIEL_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Materiels', MaterielSchema),
        inject: [DB_PROVIDER],
    },
];