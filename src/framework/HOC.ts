import Block, { BlockProps } from "./Block";
import store, { StoreEvents } from "../store/Store";

export function connect<
  TStateProps extends BlockProps,
  TOwnProps extends BlockProps
>(mapStateToProps: (state: TStateProps, ownProps: TOwnProps) => TStateProps) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: TOwnProps) {
        // Сохраняем начальные пропсы компонента
        const ownProps = props;

        // Получаем начальное состояние из хранилища
        let state = mapStateToProps(store.getState() as TStateProps, ownProps);

        // Объединяем пропсы компонента и пропсы из хранилища
        super({ ...ownProps, ...state } as Omit<TOwnProps, keyof TStateProps> &
          TStateProps);

        // Подписываемся на событие обновления хранилища
        store.on(StoreEvents.Updated, () => {
          // При обновлении получаем новое состояние
          const newState = mapStateToProps(
            store.getState() as TStateProps,
            ownProps
          );

          // Обновляем компонент, если данные изменились
          // if (!isEqual(state, newState)) {
          this.setProps({ ...ownProps, ...newState });
          // }

          // Сохраняем новое состояние
          state = newState;
        });
      }
    };
  };
}
