import MenuSuperiorGeral from '../../components/MenuSuperiorGeral'
import MenuSuperiorUfca from '../../components/MenuSuperiorUfca'
import MenuAtalhosUfca from '../../components/MenuAtalhosUfca'
import RodapeSite from '../../components/RodapeSite'


function UfcaIndex() {
  return (
  <div>
    <MenuSuperiorGeral />
    <MenuSuperiorUfca />
    <MenuAtalhosUfca />
    <RodapeSite />

  </div>
  );
}
export default UfcaIndex