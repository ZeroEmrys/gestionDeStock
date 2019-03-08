import { materielProviders } from './materiel.providers';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { MaterielController } from './materiel.controller';
import { MaterielService } from './materiel.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MaterielController],
  providers: [
    MaterielService,
  ...materielProviders],
})
export class MaterielModule {}
