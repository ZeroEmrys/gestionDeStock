import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterielModule } from './materiel/materiel.module';
import { CategorieModule } from './categorie/categorie.module';

@Module({
  imports: [MaterielModule, CategorieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
