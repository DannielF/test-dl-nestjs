import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('App test-dl')
  .setDescription('User operations')
  .setVersion('1.0')
  .setLicense('MIT', 'https://opensource.org/licenses/MIT')
  .build();

export const options: SwaggerDocumentOptions = {
  operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
};

export const swaggerOptions: SwaggerCustomOptions = {
  url: 'http://localhost:3000/api/v1',
};
