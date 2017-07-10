import {Component} from 'react';
import {Container} from 'flux/utils';
import App from './App';
import RestoActions from './action/RestoActions';
import RestoStore from './store/RestoStore';

function getStores() {
  return [
    RestoStore,
  ];
}

function getState() {
  return {
    platos:RestoStore.getState(),
    onNuevoPlato: RestoActions.addPlato,            
  };
}

export default Container.createFunctional(App, getStores, getState);