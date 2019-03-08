import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterielModule } from './materiel/materiel.module';

@Module({
  imports: [MaterielModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
