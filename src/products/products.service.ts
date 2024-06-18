import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseservice: DatabaseService) {}

  create(createProductDto: Prisma.ProductCreateInput) {
    return this.databaseservice.product.create({
      data: createProductDto,
    });
  }

  findAll() {
    return this.databaseservice.product.findMany();
  }

  findOne(id: string) {
    return this.databaseservice.product.findUnique({
      where: { id },
    });
  }

  update(id: string, updateProductDto: Prisma.ProductUpdateInput) {
    console.log('updateProductDto', id);
    return this.databaseservice.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: string) {
    return this.databaseservice.product.delete({
      where: { id },
    });
  }
}
