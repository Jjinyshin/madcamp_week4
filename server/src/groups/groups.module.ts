import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import {AppointmentsService} from '../appointments/appointments.service'
import { GroupsController } from './groups.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService, AppointmentsService],
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: +process.env.JWT_MAX_AGE },
    }),
  ],
})
export class GroupsModule {}
