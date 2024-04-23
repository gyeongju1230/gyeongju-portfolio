// TODO. SkillTag ID 별로 보여지도록 구현 필요

import * as styles from "./SkillTag.styles";

const colors = [
  "#FBE5D8",
  "#D8EAFB",
  "#FBF5D8",
  "#FBD8FA",
  "#FBDAD8",
  "#EEFBD8",
];

const SkillTag = () => {
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <styles.TagContainer className="hide-description">
      <styles.TagBox getRandomColor={getRandomColor()}>React</styles.TagBox>
      <styles.TagBox getRandomColor={getRandomColor()}>
        TypeScript
      </styles.TagBox>
      <styles.TagBox getRandomColor={getRandomColor()}>SSE</styles.TagBox>
      <styles.TagBox getRandomColor={getRandomColor()}>SSE</styles.TagBox>
      <styles.TagBox getRandomColor={getRandomColor()}>SSE111</styles.TagBox>
      <styles.TagBox getRandomColor={getRandomColor()}>SSE222</styles.TagBox>
    </styles.TagContainer>
  );
};

export default SkillTag;
