import { scrollToElement } from '../../utils/shared/scrollUtils';
import {
  ButtonRightPrice,
  CardRightPrice,
  FooterTextRightPrice,
  InformationRight,
  LineRightPrice,
} from './PriceStyle';
import { useSelector } from 'react-redux';

const translations = {
  ru: {
    ribbon: 'СТАРТ 1 МАЯ',
    title: 'СТОИМОСТЬ КУРСА',
    subTitle: 'Полный курс и поддержка',
    price: 'от',
    perSystem: 'за весь период обучения',
    button: 'ЗАПИСАТЬСЯ',
    footer: 'До 20 мая — 10 000₽ (50% скидка), до 25 мая — 15 000₽ (25% скидка), после — 20 000₽',
    data: [
      {
        id: 1,
        icon: 'film-outline',
        text: 'Создашь 60 видео для канала muslimkids.media',
      },
      {
        id: 2,
        icon: 'cut-outline',
        text: 'Научишься монтажу в приложении InShot',
      },
      {
        id: 3,
        icon: 'link-outline',
        text: 'Получишь подборку полезных шаблонов и ссылок для CapCut',
      },
      {
        id: 4,
        icon: 'bulb-outline',
        text: 'Освоишь генерацию идей и сценариев с помощью GPT',
      },
      {
        id: 5,
        icon: 'school-outline',
        text: 'Поймёшь, как обучать и вдохновлять через контент',
      },
      {
        id: 6,
        icon: 'earth-outline',
        text: 'Сделаешь контент, понятный умме по всему миру',
      },
      {
        id: 7,
        icon: 'people-outline',
        text: 'Создашь халяльный, семейный и детский контент',
      },
      {
        id: 8,
        icon: 'chatbox-ellipses-outline',
        text: 'Будешь в группе с поддержкой и разбором заданий',
      },
      {
        id: 9,
        icon: 'shield-checkmark-outline',
        text: 'Научишься фильтровать и проверять контент',
      },
      {
        id: 10,
        icon: 'rocket-outline',
        text: 'Настроишь контент-план и начнёшь путь к 50 000 подписчиков',
      },
    ],
  },
  ky: {
    ribbon: 'БААРЫ АКЫСЫЗ',
    title: 'ЖАЗЫЛУУ ЖАНА КОЛДОНУУ',
    subTitle: 'Жазылуу жок, жарнамалар жок',
    price: 'баштап',
    perSystem: 'бардык контент үчүн',
    button: 'КӨРҮҮ',
    footer: 'Көңүл буруңуз! Контент акысыз жеткиликтүү!',
    data: [
      { id: 1, icon: 'film', text: 'Исламдык мультфильмдер жана жомоктор' },
      { id: 2, icon: 'book-outline', text: 'Билим берүү программалары' },
      { id: 3, icon: 'star-outline', text: 'Шык берүүчү окуялар' },
      { id: 4, icon: 'time-outline', text: 'Көрүү убактысын чектөө' },
      { id: 5, icon: 'people-outline', text: 'Балдар үчүн коопсуз чөйрө' },
      {
        id: 6,
        icon: 'chatbox-ellipses-outline',
        text: 'Ата-энелерге кеңештер',
      },
      { id: 7, icon: 'shield-outline', text: 'Керексиз контентти чыпкалоо' },
      { id: 8, icon: 'language-outline', text: 'Көп тилдүү видео' },
      { id: 9, icon: 'gift-outline', text: 'Акысыз жеткиликтүү' },
      { id: 10, icon: 'heart-outline', text: 'Долбоорду колдоо' },
    ],
  },
};

const RightPrice = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const lang = languageStore ? translations.ky : translations.ru;
  const scrollfooterContacts = () => scrollToElement('footerContacts');

  return (
    <CardRightPrice>
      <div className="ribbon">{lang.ribbon}</div>
      <h2>{lang.title}</h2>
      <p>{lang.subTitle}</p>
      <h3>
        <span> </span>20 000<span className="dollar">рубль</span>
      </h3>
      <h4>{lang.perSystem}</h4>
      {lang.data.map((item) => (
        <InformationRight key={item.id}>
          <div className="papaIconTextRight">
            <div>
              <ion-icon name={item.icon}></ion-icon>
            </div>
            <p>{item.text}</p>
          </div>
          <LineRightPrice></LineRightPrice>
        </InformationRight>
      ))}
      <ButtonRightPrice onClick={scrollfooterContacts}>
        {lang.button}
      </ButtonRightPrice>
      <FooterTextRightPrice>{lang.footer}</FooterTextRightPrice>
    </CardRightPrice>
  );
};

export default RightPrice;
