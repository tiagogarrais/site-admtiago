import MenuSuperiorUfca from '../../components/MenuSuperiorUfca';
import MenuAtalhosUfca from '../../components/MenuAtalhosUfca';
import InventarioComponente from '../../components/InventarioComponente';
import RodapeSite from '../../components/RodapeSite';

function Inventario() {
  return (
  <div>
    <MenuSuperiorUfca />
    <MenuAtalhosUfca />
    <InventarioComponente />
    <RodapeSite />
  </div>
  );
}
export default Inventario