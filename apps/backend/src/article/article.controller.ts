import { Controller } from '@nestjs/common';
import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { ArticleDocument } from './schemas/article.schema';
import { ArticleService } from './article.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateArticleDto, CreateArticleDto } from './dto';

@Controller('article')
@ApiTags('Article')
export class ArticleController extends GenericCrudController<
  ArticleDocument,
  CreateArticleDto,
  UpdateArticleDto
> {
  constructor(readonly articleService: ArticleService) {
    super(articleService);
  }
}
