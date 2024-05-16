import { DynamicModule, Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenericCrudService } from './generic-crud.service';

@Module({})
export class GenericCrudModule {
  static forFeature(modelName: string, schema: any): DynamicModule {
    const providers: Provider[] = [
      {
        provide: `${modelName}CrudService`,
        useFactory: (model: any) => new GenericCrudService(model),
        inject: [`${modelName}Model`],
      },
    ];

    return {
      module: GenericCrudModule,
      imports: [MongooseModule.forFeature([{ name: modelName, schema }])],
      providers: providers,
      exports: providers,
    };
  }
}
