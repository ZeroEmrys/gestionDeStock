import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { typeProviders } from './type.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TypeController],
  providers: [TypeService,
    ...typeProviders],
 })
export class TypeModule {}
