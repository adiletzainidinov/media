import { ContacktsLeftBox } from './ContacktsStyle';
import { useSelector } from 'react-redux';

const translations = {
  ru: {
    subtitle: '«Каждое видео — это возможность изменить чью-то жизнь»',
    title: '«Стань тем, кто создаёт контент с пользой и смыслом»',
  },
  ky: {
    subtitle: '«Таза контент — ата-энелер үчүн тынчтык»',
    title: '«Балдарыңызга коопсуз билим жана халал кубаныч тартуулаңыз»',
  },
};

const LeftContact = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru;

  return (
    <ContacktsLeftBox>
      <p>{lang.subtitle}</p>
      <h2>
        {lang.title} <br />{' '}
      </h2>
    </ContacktsLeftBox>
  );
};

export default LeftContact;
