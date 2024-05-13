import { Injectable } from '@nestjs/common';
import { CreateArticleDto, UpdateArticleDto } from './dto/article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './schemas/article.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    return this.articleModel.findById(id);
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    const result = await this.articleModel
      .findOneAndUpdate({ _id: id }, { $set: updateArticleDto })
      .exec();

    if (!result) {
      throw new Error('No document found with the given ID');
    }

    return this.findOne(id);
  }

  async remove(id: string) {
    return this.articleModel.deleteOne({ _id: id });
  }
}
