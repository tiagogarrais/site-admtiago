import MenuSuperior from '../components/MenuSuperior';
import MenuAtalhos from '../components/MenuAtalhos';
import RodapeSite from '../components/RodapeSite';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
  return (
  <div>
    <MenuSuperior />
    <MenuAtalhos />
    <RodapeSite />

  </div>
  );
}
export default HomePage