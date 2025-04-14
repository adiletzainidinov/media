import { useSelector } from 'react-redux';
import {
  Container,
  StyledBox,
  Overlay,
  Background,
  TextContainer,
} from './VideoUmraStyle';

const VideoPlatform = () => {
  const { languageStore } = useSelector((state) => state.umra);

  // Мультиязычный текст
  const textContent = languageStore
    ? {
        title:
          'Туура <span className="world">билим</span> — балдарыңыздын ийгиликтүү келечегинин кепилдиги',
        description:
          '«Эгерде бала туура тарбия жана адал билим алса, анын келечеги нурдуу болот. Биздин платформанын максаты — Ислам баалуулуктарына шайкеш, коопсуз жана пайдалуу контент менен балдарды камсыз кылуу».',
        footer: 'Балдарыңыз үчүн адал жана коопсуз контент',
      }
    : {
        title:
          'Создавай <span className="world">контент</span> с вечной наградой',
        description:
          'Каждое полезное видео — это живая милостыня. Стань тем, кто несёт свет через экран.',
        footer: 'Смысл хадиса Пророка ﷺ',
      };

  return (
    <Container>
      <StyledBox>
        <Background />
        <Overlay />
        <TextContainer>
          <h1 dangerouslySetInnerHTML={{ __html: textContent.title }} />
          <p>
            {textContent.description} <br />{' '}
          </p>
          <p className="tirmizi">{textContent.footer}</p>
        </TextContainer>
      </StyledBox>
    </Container>
  );
};

export default VideoPlatform;
