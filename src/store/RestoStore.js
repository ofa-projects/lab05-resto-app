import {ReduceStore} from 'flux/utils';
import RestoActionTypes from '../action/RestoActionTypes';
import RestoDispatcher from '../RestoDispatcher';

class RestoStore extends ReduceStore {
  constructor() {
    super(RestoDispatcher);
  }

    getInitialState() {
        //return Immutable.OrderedMap();
        return {
            platos:[],
            platoEditar:{nombre:'',precio:0.0}
        };
    }

    reduce(state, action) {
        switch (action.type) {
        case RestoActionTypes.ADD_PLATO:
            // El plato tiene que tener nombre y precio
            if (!action.nombre) {
                return state;
            }
            if (!action.precio) {
                return state;
            }
            let platoNuevo ={nombre:action.nombre,precio:action.precio}.
            const platosAux= this.state.platos.slice();
            platosAux.push(platoNuevo);
            let nuevoEstado = {
                platos:platosAux,
                platoEditar:{nombre:'',precio:0.0}
            };
            return nuevoEstado;
        }
    }
}

export default RestoStore;