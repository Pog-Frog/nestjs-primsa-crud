import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly databaseservice: DatabaseService) {}

  create(createCategoryDto: Prisma.CategoryCreateInput) {
    return this.databaseservice.category.create({
      data: createCategoryDto,
    });
  }

  findAll() {
    return this.databaseservice.category.findMany({
      include: { products: true },
    });
  }

  findOne(id: string) {
    return this.databaseservice.category.findUnique({
      where: { id },
      include: { products: true },
    });
  }

  update(id: string, updateCategoryDto: Prisma.CategoryUpdateInput) {
    return this.databaseservice.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  remove(id: string) {
    return this.databaseservice.category.delete({
      where: { id },
    });
  }
}
