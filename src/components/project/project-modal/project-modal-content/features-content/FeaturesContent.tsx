import * as styles from './FeaturesContent.styles';

interface Features {
  image: string;
  title: string;
  content: string;
}

interface FeaturesContentProps {
  featuresContent: Features[];
}

const FeaturesContent = ({ featuresContent }: FeaturesContentProps) => {
  return (
    <>
      {featuresContent.map((content, index) => (
        <styles.Container key={index}>
          <styles.Content>{content.content}</styles.Content>
          {content.image && (
            <styles.ImageBox>
              <img
                src={require(`assets/images/project/gif/${content.image}.gif`)}
                alt="Gif"
                className="image"
              />
            </styles.ImageBox>
          )}
        </styles.Container>
      ))}
    </>
  );
};

export default FeaturesContent;
