import * as styles from './ProjectBox.styles';
import ProjectImage from '@components/project/project-box/project-image/ProjectImage';
import { ReactComponent as Deunbung } from '@assets/images/project/deunbung/Deunbung_Loge.svg';
import { ReactComponent as Sagopasam } from '@assets/images/project/sagopasam/Sagopasam_Logo.svg';
import { ReactComponent as Portfolio } from '@assets/images/project/portfolio/Portfolio_Logo.svg';
import ProjectContent from '@components/project/project-box/project-content/ProjectContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

interface ProjectBoxProps {
  handleModalOpen: (id: string) => void;
}

const ProjectBox = ({ handleModalOpen }: ProjectBoxProps) => {
  return (
    <styles.ProjectBox>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        keyboard={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <styles.Project>
            <ProjectImage
              id="deunbung"
              handleModalOpen={handleModalOpen}
              image={<Deunbung className="icon" />}
            />
            <ProjectContent id="deunbung" handleModalOpen={handleModalOpen} />
          </styles.Project>
        </SwiperSlide>

        <SwiperSlide>
          <styles.Project>
            <ProjectImage
              id="sagopasam"
              handleModalOpen={handleModalOpen}
              image={<Sagopasam className="icon" />}
            />
            <ProjectContent id="sagopasam" handleModalOpen={handleModalOpen} />
          </styles.Project>
        </SwiperSlide>

        <SwiperSlide>
          <styles.Project>
            <ProjectImage
              id="portfolio"
              handleModalOpen={handleModalOpen}
              image={<Portfolio className="icon" />}
            />
            <ProjectContent id="portfolio" handleModalOpen={handleModalOpen} />
          </styles.Project>
        </SwiperSlide>
      </Swiper>
    </styles.ProjectBox>
  );
};

export default ProjectBox;
