import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaveModule } from './leave/leave.module';
import * as dotenv from "dotenv";
dotenv.config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI as string,{
      ssl: true,
    }),
    AuthModule,
    UsersModule,
    LeaveModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
