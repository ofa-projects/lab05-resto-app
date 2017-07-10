import RestoActionTypes from './RestoActionTypes';
import RestoDispatcher from '../RestoDispatcher';

const RestoActions = {
  addPlato(pNombre,pPrecio) {
    RestoDispatcher.dispatch({
      type: RestoActionTypes.ADD_TODO,
      pNombre,pPrecio
    });
  }

};

export default RestoActions;