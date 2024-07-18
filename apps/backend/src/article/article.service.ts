import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import { GenericCrudService } from '../generic-crud/generic-crud.service';

@Injectable()
export class ArticleService extends GenericCrudService<ArticleDocument> {
  constructor(
    @InjectModel(Article.name) readonly ArticleModel: Model<ArticleDocument>, // Correctly type the model
  ) {
    super(ArticleModel);
  }
}
