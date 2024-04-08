import { ApiProperty } from '@nestjs/swagger';


class ShoppingCartItem {
  @ApiProperty({ example: 12 })
  id: number;

  @ApiProperty({ example: 'Absorbeo teneo.' })
  name: string;

  @ApiProperty({ example: 2500 })
  price: number;

  @ApiProperty({
    example:
      'https://loremflickr.com/640/480/technics?random=872134989447863288133060975487',
  })
  image: string;

  @ApiProperty({ example: 3 })
  in_stock: number;

  @ApiProperty({ example: 'Croatia' })
  parts_manufacturer: string;

  @ApiProperty({ example: 'Buderus' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 4 })
  userId: number;

  @ApiProperty({ example: 34 })
  partId: number;

  @ApiProperty({ example: 1 })
  count: number;

  @ApiProperty({ example: 152 })
  total_price: number;

  @ApiProperty({ example: '2023-11-29T08:06:50.514Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-11-29T08:06:50.514Z' })
  updatedAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}
export class AddToCardResponse extends ShoppingCartItem {}
export class UpdateCountResponse {
  @ApiProperty({ example: 1 })
  count: number;
}
export class UpdateCountRequest {
  @ApiProperty({ example: 1 })
  count: number;
}
export class TotalPriceResponse {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
export class TotalPriceRequest {
  @ApiProperty({ example: 1000 })
  total_price: number;
}