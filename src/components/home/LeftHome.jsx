import { useSelector } from 'react-redux';
import Button from '../../shared/UI/button/Button';
import { LeftContainer, StyledButtonInformation } from './homeStyle';
import { scrollToElement } from '../../utils/shared/scrollUtils';

const LeftHome = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const scrollToPriceSection = () => scrollToElement('priceSection');
  const scrollfooterContacts = () => scrollToElement('footerContacts');

  // Мультиязычные данные
  const textContent = languageStore
    ? {
        title: 'Балдарыңыз үчүн адал контент',
        subtitle: 'Исламга шайкеш видеолор',
        description:
          'Биздин платформада сиз балдарыңыз үчүн коопсуз жана адал видеолорду таба аласыз. Бардык контент Исламдын негизги принциптерине шайкеш келет жана пайдалуу билим берет.',
        priceQuality: 'Коопсуздук жана пайдалуу маалымат',
        startButton: 'Платформа тууралуу',
        infoButton: 'Толук маалымат алуу',
      }
    : {
        title: 'Я знаю, как дойти до 50 000 подписчиков',
        subtitle: 'И научу тебя — шаг за шагом',
        description:
          'Ты можешь вырасти до 50 000 подписчиков даже с нуля. Я сам это сделал за 3 месяца. Теперь я помогаю другим — с полным сопровождением, чётким планом и поддержкой. Даже если тебе понадобится год — я всегда буду рядом, подсказывать, поддерживать и доводить до результата.',
        priceQuality: 'Набрать 50 тысячи подписчиков',
        startButton: 'Посмотреть детали',
        infoButton: 'Записаться',
      };

  return (
    <LeftContainer>
      <h3>{textContent.title}</h3>
      <h1>{textContent.subtitle}</h1>
      <h2>{textContent.priceQuality}</h2>
      <div className="line"></div>
      <p>{textContent.description}</p>
      <div className="buttonPapa">
        <Button onClick={scrollToPriceSection}>
          {textContent.startButton}
        </Button>
        <StyledButtonInformation onClick={scrollfooterContacts}>
          {textContent.infoButton}
        </StyledButtonInformation>
      </div>
    </LeftContainer>
  );
};

export default LeftHome;
