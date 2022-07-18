import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './typeorm/index';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789@stockoptic',
      database: 'stockoptic',
      entities,
      synchronize: true,
    }),
    CustomersModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
