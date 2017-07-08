import React from 'react';
import { Container } from 'flux/utils';
import AppView from './views/AppView';
import ShoesStore from './services/stores/ShoesStore';


class AppContainer extends React.Component {
    static getStores() {
        return [ShoesStore];
    }

    static calculateState(prevState) {
        return {
            items: ShoesStore.getState(),
        };
    }

    render() {
        return <AppView items={this.state.items} />;
    }
}

export default Container.create(AppContainer);