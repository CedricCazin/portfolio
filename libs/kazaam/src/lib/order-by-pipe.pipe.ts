import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(collection: any[], key: string[] = [''], order: (boolean | "asc" | "desc")[] = ["asc"]): any[] {
    if (!collection) {
      return collection;
    }

    if (collection.length <= 1) {
      return collection;
    }

    return orderBy(collection, key, order);
  }
}
