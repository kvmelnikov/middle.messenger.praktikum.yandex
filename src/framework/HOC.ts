import Block, { BlockProps } from "./Block";

import store, { StoreEvents } from "../store/Store";

export function connect<P extends BlockProps>(
  mapStateToProps: (state: BlockProps) => P
) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: P) {
        // сохраняем начальное состояние
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
          // при обновлении получаем новое состояние

          const newState = mapStateToProps(store.getState());

          // если что-то из используемых данных поменялось, обновляем компонент
          // if (!isEqual(state, newState)) {

          this.setProps({ ...newState });
          //}

          // не забываем сохранить новое состояние
          state = newState;
        });
      }
    };
  };
}

function isEqual(oldState: BlockProps, newState: BlockProps) {
  return true;
}
