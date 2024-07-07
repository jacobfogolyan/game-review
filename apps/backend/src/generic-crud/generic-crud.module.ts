import { MongooseModule } from '@nestjs/mongoose';
import { DynamicModule, Module, Provider } from '@nestjs/common';
import { GenericCrudService } from './generic-crud.service';
import { Model, Document } from 'mongoose';

export const MODEL_TOKEN = 'MODEL_TOKEN';

@Module({})
export class GenericCrudModule {
  static forFeature<T extends Document>(
    modelName: string,
    schema: any,
  ): DynamicModule {
    const providers: Provider[] = [
      {
        provide: `${modelName}`,
        useFactory: (model: Model<T>) => model,
        inject: [`${modelName}`],
      },
      {
        provide: `${modelName}Service`,
        useClass: GenericCrudService,
      },
    ];

    return {
      module: GenericCrudModule,
      imports: [
        MongooseModule.forFeature([{ name: modelName, schema: schema }]),
      ],
      providers: providers,
      exports: providers,
    };
  }
}
