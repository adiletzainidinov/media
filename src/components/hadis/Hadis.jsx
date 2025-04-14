import { useSelector } from 'react-redux';
import {
  Container,
  StyledBox,
  Overlay,
  Background,
  TextContainer,
} from './HadisStyle';

// Объект переводов для двух языков
const translations = {
  ky: {
    servicesTitle: 'Балдар үчүн халал контент',
    servicesDescription:
      'Балдар үчүн халал контентин түзүү, профессионалдуу жаратылыш жана дин талаптарына жооп берүү',
  },
  ru: {
    servicesTitle: 'Ты сразу начнёшь делать, не просто смотреть',
    servicesDescription:
      'Я покажу тебе, как делать контент, который набирает просмотры. От первого видео до первых 50 000 подписчиков.',
  },
};

const Hadis = () => {
  // Получаем состояние языка из Redux store
  const { languageStore } = useSelector((state) => state.umra);

  // Определяем текущий язык (если languageStore = true, то кыргызский, если false — русский)
  const lang = languageStore ? translations.ky : translations.ru;

  return (
    <Container>
      <StyledBox>
        <Background />
        <Overlay />
        <TextContainer>
          {/* Используем переводы в зависимости от языка */}
          <p className="tirmizi">{lang.servicesTitle}</p>
          <h1>
            {lang.servicesDescription} <br />{' '}
          </h1>
        </TextContainer>
      </StyledBox>
    </Container>
  );
};

export default Hadis;
