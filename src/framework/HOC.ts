import Block, { BlockProps } from "./Block";
import store, { StoreEvents } from "../store/Store";

interface MapStateToProps<Tstate, Tpops extends BlockProps> {
  (state: Tstate): Tpops;
}

export default function connect<Tstate, Tprops extends BlockProps>(
  Component: typeof Block,
  mapStateToProps: MapStateToProps<Tstate, Tprops>
) {
  return class extends Component {
    constructor(props: Tprops) {
      super({ ...props, ...mapStateToProps(store.getState() as Tstate) });

      store.on(StoreEvents.Updated, () => {
        this.setState({ ...mapStateToProps(store.getState() as Tstate) });
      });
    }
  };
}
