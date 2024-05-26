import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import {Module} from "@nestjs/common";
import {AuthModule} from "./auth/auth.module";
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { KidsModule } from './kids/kids.module';
import * as path from 'path';
import * as process from "node:process";
import {Kid} from "./kids/kids.model";
import {Parent} from "./parents/parents.model";
import { WorkersModule } from './workers/workers.module';
import {Worker} from "./workers/workers.model";
import { AgreementsModule } from './agreement/agreements.module';
import { ParentsModule } from './parents/parents.module';
import {Agreement} from "./agreement/agreements.model";
import { PricesService } from './prices/prices.service';
import { PricesController } from './prices/prices.controller';
import { PricesModule } from './prices/prices.module';
import {Price} from "./prices/prices.model";


@Module({
    controllers: [PricesController],
    providers: [PricesService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve( __dirname, 'static'),
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post, Kid, Parent, Worker, Agreement, Price],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
        KidsModule,
        ParentsModule,
        WorkersModule,
        AgreementsModule,
        PricesModule
    ]
})
export class AppModule{}