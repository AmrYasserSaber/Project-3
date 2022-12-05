import {Table, Column, Model, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript';


@Table
export class FeedItem extends Model<FeedItem> {
  @Column({type:DataType.STRING})
   caption!: string;

  @Column({type:DataType.STRING})
   url!: string;

  @Column({type:DataType.DATE})
  @CreatedAt
   createdAt: Date = new Date();

  @Column({type:DataType.DATE})
  @UpdatedAt
   updatedAt: Date = new Date();
}
