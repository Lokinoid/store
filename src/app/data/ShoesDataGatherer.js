import ShoesData from './ShoesData';


class IdGenerator {
    static id = 0;
    static next() {
        return IdGenerator.id++;
    }
}

export default class ShoesDataGatherer {
    patch(item) {
        item.id = IdGenerator.next();
        item.img = '/img/' + item.img;
    }

    getItemsAsync(number) {
        let items = ShoesData;
        items.forEach(item => this.patch(item));
        return Promise.resolve(items);
    }
}