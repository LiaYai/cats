import Checkbox from '../common/checkbox/checkbox';
import Button from '../common/button/button';
import { useCat } from '../../context/cat-context';

import './controls.scss';

const Controls = () => {
  const { isEnabled, refresh, fetchCat, toggleEnabled, toggleRefresh } = useCat();

  return (
    <form className="form">
      <Checkbox label="Enabled" checked={isEnabled} onChange={toggleEnabled} />

      <Checkbox
        label="Auto-refresh every 5 seconds"
        checked={refresh}
        onChange={toggleRefresh}
        disabled={!isEnabled}
      />

      <Button onClick={fetchCat} disabled={!isEnabled}>
        Get cat
      </Button>
    </form>
  );
};
export default Controls;
