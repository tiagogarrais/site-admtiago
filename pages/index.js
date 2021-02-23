import MenuSuperiorGeral from '../components/MenuSuperiorGeral';
import MenuAtalhosGeral from '../components/MenuAtalhosGeral';
import RodapeSite from '../components/RodapeSite';


function Index() {
  return (
  <div>
    <MenuSuperiorGeral />
    <MenuAtalhosGeral />
    <body>
      <p>Nesta área, será implementada a autenticação do Google</p>
    </body>
    <RodapeSite />
  </div>
  );
}
export default Index