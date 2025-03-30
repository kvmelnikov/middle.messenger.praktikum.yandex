import Block, { BlockProps } from "./Block";
import store, { StoreEvents } from "../store/Store";

export function connect<P extends BlockProps>(
  mapStateToProps: (state: BlockProps, ownProps: any) => P
) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: P) {
        // Сохраняем начальные пропсы компонента
        const ownProps = props;

        // Получаем начальное состояние из хранилища
        let state = mapStateToProps(store.getState(), ownProps);

        // Объединяем пропсы компонента и пропсы из хранилища
        super({ ...ownProps, ...state });

        // Подписываемся на событие обновления хранилища
        store.on(StoreEvents.Updated, () => {
          // При обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState(), ownProps);

          // Обновляем компонент, если данные изменились
          if (!isEqual(state, newState)) {
            this.setProps({ ...ownProps, ...newState });
          }

          // Сохраняем новое состояние
          state = newState;
        });
      }
    };
  };
}
