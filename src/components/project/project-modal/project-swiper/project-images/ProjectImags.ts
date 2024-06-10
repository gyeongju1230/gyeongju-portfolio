import React from 'react';
import { ReactComponent as AppStoreImagePortfolio1 } from '@assets/images/project/portfolio/Portfolio_AppStoreImage1.svg';
import { ReactComponent as AppStoreImagePortfolio2 } from '@assets/images/project/portfolio/Portfolio_AppStoreImage2.svg';
import { ReactComponent as AppStoreImagePortfolio3 } from '@assets/images/project/portfolio/Portfolio_AppStoreImage3.svg';
import { ReactComponent as AppStoreImagePortfolio4 } from '@assets/images/project/portfolio/Portfolio_AppStoreImage4.svg';
import { ReactComponent as AppStoreImagePortfolio5 } from '@assets/images/project/portfolio/Portfolio_AppStoreImage5.svg';
import { ReactComponent as AppStoreImageTodo1 } from '@assets/images/project/todo/Todo_AppStoreImage1.svg';
import { ReactComponent as AppStoreImageTodo2 } from '@assets/images/project/todo/Todo_AppStoreImage2.svg';
import { ReactComponent as AppStoreImageTodo3 } from '@assets/images/project/todo/Todo_AppStoreImage3.svg';
import { ReactComponent as AppStoreImageTodo4 } from '@assets/images/project/todo/Todo_AppStoreImage4.svg';
import { ReactComponent as AppStoreImageTodo5 } from '@assets/images/project/todo/Todo_AppStoreImage5.svg';
import { ReactComponent as AppStoreImageSagopasam1 } from '@assets/images/project/sagopasam/Sagopasam_AppStoreImage1.svg';
import { ReactComponent as AppStoreImageSagopasam2 } from '@assets/images/project/sagopasam/Sagopasam_AppStoreImage2.svg';
import { ReactComponent as AppStoreImageSagopasam3 } from '@assets/images/project/sagopasam/Sagopasam_AppStoreImage3.svg';
import { ReactComponent as AppStoreImageSagopasam4 } from '@assets/images/project/sagopasam/Sagopasam_AppStoreImage4.svg';
import { ReactComponent as AppStoreImageSagopasam5 } from '@assets/images/project/sagopasam/Sagopasam_AppStoreImage5.svg';
import { ReactComponent as AppStoreImageSagopasam6 } from '@assets/images/project/sagopasam/Sagopasam_AppStoreImage6.svg';
import { ReactComponent as AppStoreImageDeunbung1 } from '@assets/images/project/deunbung/Deunbung_AppStoreImage1.svg';
import { ReactComponent as AppStoreImageDeunbung2 } from '@assets/images/project/deunbung/Deunbung_AppStoreImage2.svg';
import { ReactComponent as AppStoreImageDeunbung3 } from '@assets/images/project/deunbung/Deunbung_AppStoreImage3.svg';
import { ReactComponent as AppStoreImageDeunbung4 } from '@assets/images/project/deunbung/Deunbung_AppStoreImage4.svg';
import { ReactComponent as AppStoreImageDeunbung5 } from '@assets/images/project/deunbung/Deunbung_AppStoreImage5.svg';
import { ReactComponent as AppStoreImageDeunbung6 } from '@assets/images/project/deunbung/Deunbung_AppStoreImage6.svg';
import { ReactComponent as AppStoreImageDeunbung7 } from '@assets/images/project/deunbung/Deunbung_AppStoreImage7.svg';

interface Images {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[];
}

const images: Images = {
  portfolio: [
    AppStoreImagePortfolio1,
    AppStoreImagePortfolio2,
    AppStoreImagePortfolio3,
    AppStoreImagePortfolio4,
    AppStoreImagePortfolio5,
  ],
  todo: [
    AppStoreImageTodo1,
    AppStoreImageTodo2,
    AppStoreImageTodo3,
    AppStoreImageTodo4,
    AppStoreImageTodo5,
  ],
  sagopasam: [
    AppStoreImageSagopasam1,
    AppStoreImageSagopasam2,
    AppStoreImageSagopasam3,
    AppStoreImageSagopasam4,
    AppStoreImageSagopasam5,
    AppStoreImageSagopasam6,
  ],
  deunbung: [
    AppStoreImageDeunbung1,
    AppStoreImageDeunbung2,
    AppStoreImageDeunbung3,
    AppStoreImageDeunbung4,
    AppStoreImageDeunbung5,
    AppStoreImageDeunbung6,
    AppStoreImageDeunbung7,
  ],
};

export default images;
