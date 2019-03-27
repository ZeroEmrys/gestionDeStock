import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterielModule } from './materiel/materiel.module';
import { CategorieModule } from './categorie/categorie.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [MaterielModule, CategorieModule, TypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
