import React from 'react';
import { Container } from 'flux/utils';

import Actions from './services/actions/Actions';

import AppView from './views/AppView';
import ShoesStore from './services/stores/ShoesStore';
import ShoesDataGatherer from './data/ShoesDataGatherer';


class AppContainer extends React.Component {
    static getStores() {
      return [ShoesStore];
    }

    static calculateState(prevState) {
      return {
        items: ShoesStore.getState(),
      };
    }

    constructor() {
      super();
      this.dataGatherer = new ShoesDataGatherer();
      this.dataGatherer.getItemsAsync(10)
        .then(items => {
          Actions.addItem(items);
        });
    }

    render() {
        return <AppView items={this.state.items} />;
    }
}

export default Container.create(AppContainer);