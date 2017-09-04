import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term, prop): any {
        if(!term){
            return items;
        } else if(prop){
            if(prop instanceof Array){ // if multiple properties filter
                return items.filter(item => {
                    let isMatch = false;
                    prop.forEach(element => {
                        if(item[prop[0]].indexOf(term) !== -1) isMatch = true
                    });
                    if(isMatch) return item;
                });
            }
            // if string of property filter
            return items.filter(item => item[prop].indexOf(term) !== -1);
        } else {
            return items.filter(item =>
                Object.keys(item).some(k => item[k] ? (item[k].toLowerCase().indexOf(term.toLowerCase()) !== -1) : false)
            );
        }
    }
}

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(items: any[], sortedBy: string): any {
        console.log('sortedBy', sortedBy);
        
        return items.sort((a, b) => {return b[sortedBy] - a[sortedBy]});
    }
}