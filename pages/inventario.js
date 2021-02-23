import MenuSuperior from '../components/MenuSuperior';
import MenuAtalhos from '../components/MenuAtalhos';
import InventarioComponente from '../components/InventarioComponente';
import RodapeSite from '../components/RodapeSite';
import 'bootstrap/dist/css/bootstrap.min.css';


function Inventario() {
  return (
  <div>
    <MenuSuperior />
    <MenuAtalhos />
    <InventarioComponente />
    <RodapeSite />
  </div>
  );
}
export default Inventario