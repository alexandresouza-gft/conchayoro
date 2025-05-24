import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

const product = {
  name: 'Product1',
  price: 10,
  category: 'C1',
  rating: 1,
};

const createProductDto: CreateProductDto = product;
const updateProductDto: UpdateProductDto = product;

describe('ProductsController', () => {
  let productsService: ProductsService;
  let productsController: ProductsController;
  let product: Product;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: getModelToken(Product),
          useValue: {},
        },
      ],
    }).compile();

    productsService = moduleRef.get<ProductsService>(ProductsService);
    productsController = moduleRef.get<ProductsController>(ProductsController);
    product = moduleRef.get<Product>(getModelToken(Product));
  });

  it('should create a product', async () => {
    const mockedResponseData = product;

    jest
      .spyOn(productsService, 'create')
      .mockResolvedValue(mockedResponseData);

    const result = await productsController.create(createProductDto);

    expect(result).toBe(mockedResponseData);
  });

  it('should update a product', async () => {
    const mockedResponseData = product;
    const id = '1';

    jest
      .spyOn(productsService, 'update')
      .mockResolvedValue(mockedResponseData);

    const result = await productsController.update(id, updateProductDto);

    expect(result).toBe(mockedResponseData);
  });

  it('should delete a product', async () => {
    const id = '1';

    jest
      .spyOn(productsService, 'remove')
      .mockResolvedValue(undefined);

    await expect(productsController.remove(id)).resolves.toBeUndefined();
  });

  it('should return an array of products', async () => {
    const mockedResponseData = [];

    jest
      .spyOn(productsService, 'findAll')
      .mockResolvedValue(mockedResponseData);

    const result = await productsController.findAll();

    expect(result).toBe(mockedResponseData);
  });

  it('should return a specific product', async () => {
    const mockedResponseData = product;
    const id = '1';

    jest
      .spyOn(productsService, 'findOne')
      .mockResolvedValue(mockedResponseData);

    const result = await productsController.findOne(id);

    expect(result).toBe(mockedResponseData);
  });
});
