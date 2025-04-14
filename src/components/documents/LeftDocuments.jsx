import {
  DocumentsSome,
  LeftContainer,
  PapaDocumentSome,
} from './DocumentsStyle';
import { useSelector } from 'react-redux';

const translations = {
  ru: {
    title: 'Что вас ждёт на курсе',
    data: [
      {
        id: 1,
        icon: 'play-circle-outline',
        title: '60 видео за 1 месяц',
        subTitle:
          'Вы создадите 60 исламских видеороликов, которые реально выйдут на канале muslimkids.media и принесут миллионы просмотров.',
      },
      {
        id: 2,
        icon: 'cut-outline',
        title: 'Обучение монтажу в InShot',
        subTitle:
          'Мы научим вас работать в простом и удобном редакторе InShot. Даже если вы никогда не монтировали — вы справитесь!',
      },
      {
        id: 3,
        icon: 'bulb-outline',
        title: 'Работа с GPT и сценариями',
        subTitle:
          'Вы научитесь использовать ChatGPT для генерации идей, написания текстов и сценариев, что упростит весь процесс.',
      },
      {
        id: 4,
        icon: 'chatbox-ellipses-outline',
        title: 'Поддержка и сообщество',
        subTitle:
          'Каждый день — задания, проверка, разбор. А в Telegram вы получите поддержку, ответы и мотивацию от меня лично.',
      },
    ],
  },

  ky: {
    title: 'Долбоорду ишке ашыруу үчүн сиздин колдооңуз керек',
    data: [
      {
        id: 1,
        icon: 'cash-outline',
        title: 'Долбоорду каржылоо',
        subTitle:
          'Платформаны түзүү үчүн 100 000$ талап кылынат. Сиздин салымыңыз балдар үчүн коопсуз контент түзүүгө жардам берет!',
      },
      {
        id: 2,
        icon: 'brush-outline',
        title: 'Figma дизайнерлер керек',
        subTitle:
          'Бизге долбоордун интерфейсин жана визуалдык стилин түзүүгө жардам бере турган ыктыярчылар керек.',
      },
      {
        id: 3,
        icon: 'cut-outline',
        title: 'Монтажёр-ыктыярчылар керек',
        subTitle:
          'Эгерде сиз видео монтаждоо боюнча тажрыйбаңыз бар болсо, бизге кошулуңуз! Бизге видеолорду иштеп чыгууга жардам берүү керек.',
      },
      {
        id: 4,
        icon: 'heart-outline',
        title: 'Кандай жардам болбосун маанилүү',
        subTitle:
          'Башкача жардам бере аласызбы? Биз менен байланышыңыз! Келгиле, балдар үчүн пайдалуу контентти бирге түзөлү.',
      },
    ],
  },
};

const LeftDocuments = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru; // Показываем кыргызский, если languageStore = true, и русский, если false

  return (
    <LeftContainer>
      <h1>{lang.title}</h1>
      <PapaDocumentSome>
        {lang.data.map((item) => (
          <DocumentsSome key={item.id}>
            <div className="icons">
              <ion-icon name={item.icon}></ion-icon>
            </div>
            <h2 style={{ textAlign: 'center' }}>{item.title}</h2>
            <p>
              {item.subTitle} <br />
            </p>
          </DocumentsSome>
        ))}
      </PapaDocumentSome>
    </LeftContainer>
  );
};

export default LeftDocuments;
