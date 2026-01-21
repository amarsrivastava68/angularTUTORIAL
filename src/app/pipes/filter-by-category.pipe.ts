import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  pure: false  // Make it impure so it updates when array changes
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(items: any[], category: string): any[] {
    if (!items) {
      return [];
    }
    
    if (!category || category === '') {
      return items;
    }
    
    return items.filter(item => {
      return item.category && item.category.toLowerCase() === category.toLowerCase();
    });
  }
}