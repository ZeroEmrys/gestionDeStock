import { Module } from '@nestjs/common';
import { CategorieController } from './categorie.controller';
import { CategorieService } from './categorie.service';
import { categorieProviders } from './categorie.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategorieController],
  providers: [
    CategorieService, 
    ...categorieProviders],
  
})
export class CategorieModule {}
