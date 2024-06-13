import * as styles from './RoleTag.styles';
import projectRoleData from '../../../../data/ProjectRoleData';

const colors = ['#FFECE1', '#FBDAD8', '#FFB6C1'];

interface RoleTagProps {
  id: string;
}

const RoleTag = ({ id }: RoleTagProps) => {
  const getRandomColor = (index: number) => {
    return colors[index % colors.length];
  };

  const roleData = projectRoleData[id];
  const { role } = roleData;

  return (
    <>
      {role.map((roles: string, index: number) => (
        <styles.TagBox getRandomColor={getRandomColor(index)}>
          {roles}
        </styles.TagBox>
      ))}
    </>
  );
};

export default RoleTag;
