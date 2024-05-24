import * as styles from './ProjectBox.styles';
import ProjectImage from '@components/project/project-box/project-image/ProjectImage';
import { ReactComponent as Portfolio } from '@assets/images/project/portfolio/Portfolio_Logo.svg';
import { ReactComponent as Todo } from '@assets/images/project/todo/Todo_Logo.svg';
import { ReactComponent as Sagopasam } from '@assets/images/project/sagopasam/Sagopasam_Logo.svg';
import { ReactComponent as Deunbung } from '@assets/images/project/deunbung/Deunbung_Loge.svg';
import ProjectContent from '@components/project/project-box/project-content/ProjectContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface ProjectBoxProps {
  menuBar: string;
  handelModalOpen: (id: string) => void;
}

const ProjectBox = ({ menuBar, handelModalOpen }: ProjectBoxProps) => {
  return (
    <styles.ProjectBox className={menuBar}>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <styles.Project>
            <ProjectImage
              id="portfolio"
              handelModalOpen={handelModalOpen}
              image={<Portfolio className="icon" />}
            />
            <ProjectContent
              id="portfolio"
              handelModalOpen={handelModalOpen}
              menuBar={menuBar}
            />
          </styles.Project>
        </SwiperSlide>

        <SwiperSlide>
          <styles.Project>
            <ProjectImage
              id="todo"
              handelModalOpen={handelModalOpen}
              image={<Todo className="icon" />}
            />
            <ProjectContent
              id="todo"
              handelModalOpen={handelModalOpen}
              menuBar={menuBar}
            />
          </styles.Project>
        </SwiperSlide>

        <SwiperSlide>
          <styles.Project>
            <ProjectImage
              id="sagopasam"
              handelModalOpen={handelModalOpen}
              image={<Sagopasam className="icon" />}
            />
            <ProjectContent
              id="sagopasam"
              handelModalOpen={handelModalOpen}
              menuBar={menuBar}
            />
          </styles.Project>
        </SwiperSlide>

        <SwiperSlide>
          <styles.Project>
            <ProjectImage
              id="deunbung"
              handelModalOpen={handelModalOpen}
              image={<Deunbung className="icon" />}
            />
            <ProjectContent
              id="deunbung"
              handelModalOpen={handelModalOpen}
              menuBar={menuBar}
            />
          </styles.Project>
        </SwiperSlide>
      </Swiper>
    </styles.ProjectBox>
  );
};

export default ProjectBox;
