"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const users_service_1 = require("./users/users.service");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const usersService = app.get(users_service_1.UsersService);
    await usersService.createAdmin();
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Leave Management System')
        .setDescription('API docs for Employee and Admin')
        .addBearerAuth()
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`App is running on http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map