import * as components from './components';
import createElements from './create-elements';

export default createElements({
  components: Object.keys(components).map(
    (key) => components[key as keyof typeof components],
  ),
});
