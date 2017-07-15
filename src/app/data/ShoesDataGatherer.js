class StoreItemsFetcher {
    static getItemAsync(id) {
        const item = {
            id: id,
            name: 'item_' + id,
            description: 'description_' + id 
        };

        return Promise.resolve(item);
    }
}

export default class ShoesDataGatherer {
    getItemsAsync(number) {
        let itemPromises = [];
        for (let i = 0; i < number; i++) {
            itemPromises.push(StoreItemsFetcher.getItemAsync(i));
        }
        return Promise.all(itemPromises);
    }
}