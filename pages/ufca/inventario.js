import MenuSuperiorGeral from '../../components/MenuSuperiorGeral'
import MenuSuperiorUfca from '../../components/MenuSuperiorUfca'
import MenuAtalhosUfca from '../../components/MenuAtalhosUfca'
import InventarioComponente from '../../components/InventarioComponente'
import RodapeSite from '../../components/RodapeSite'

function Inventario() {
  return (
  <div>
    <MenuSuperiorGeral />
    <MenuSuperiorUfca />
    <MenuAtalhosUfca />
    <InventarioComponente />
    <RodapeSite />
  </div>
  );
}
export default Inventario