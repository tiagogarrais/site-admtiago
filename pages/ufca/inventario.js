import MenuSuperiorGeral from '../../components/MenuSuperiorGeral'
import MenuSuperiorUfca from '../../components/MenuSuperiorUfca'
import MenuAtalhosUfca from '../../components/MenuAtalhosUfca'
import InventarioComponente from '../../components/InventarioComponente'
import RodapeSite from '../../components/RodapeSite'
import BotaoGoogle from '../../components/BotaoGoogle'

function Inventario() {
  return (
  <div>
    <MenuSuperiorGeral />
    <MenuSuperiorUfca />
    <MenuAtalhosUfca />
    <BotaoGoogle />
    <InventarioComponente />
    <RodapeSite />
  </div>
  );
}
export default Inventario