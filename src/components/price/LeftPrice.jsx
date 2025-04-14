import { Box } from '@mui/material';
import { ContainerLeftBox, LinePrice, TextIcon } from './PriceStyle';
import { useSelector } from 'react-redux';

const DataTextIcon = [
  { id: 1, icon: 'create', textKey: 'safe_content' },            // создание контента
  { id: 2, icon: 'shield-checkmark', textKey: 'halal_control' }, // халяль проверка
  { id: 3, icon: 'happy', textKey: 'child_friendly' },           // детский стиль
  { id: 4, icon: 'bulb', textKey: 'educational' },               // GPT, идеи
  { id: 5, icon: 'time', textKey: 'time_control' },              // тайминг, график
  { id: 6, icon: 'chatbubbles', textKey: 'parent_community' },   // общение, поддержка
  { id: 7, icon: 'gift', textKey: 'free_access' },               // бонусы, доступ
  { id: 8, icon: 'language', textKey: 'multilingual' },          // мультиязычность
  { id: 9, icon: 'home', textKey: 'family_friendly' },           // семейный подход
  { id: 10, icon: 'heart-circle', textKey: 'support_us' },       // помощь, садака
];


const LeftPrice = () => {
  const { languageStore } = useSelector((state) => state.umra);

  // Мультиязычный контент
  const textContent = languageStore
    ? {
        header: 'Биздин платформанын өзгөчөлүктөрү:',
        safe_content: 'Балдар үчүн коопсуз видеоконтент',
        halal_control: 'Халал стандарттарына ылайык текшерилген',
        child_friendly: 'Балдарга ылайыктуу интерфейс',
        educational: 'Илимий жана диний билим берүү материалдары',
        time_control: 'Көрүү убактысын чектөө функциясы',
        parent_community: 'Ата-энелер үчүн колдоо жана пикир алышуу',
        free_access: 'Акысыз жана жеткиликтүү видеолор',
        multilingual: 'Бир нече тилде видеоконтент',
        family_friendly: 'Үй-бүлөлүк контент',
        support_us: 'Бизди колдоо үчүн кайрымдуулук мүмкүнчүлүктөрү',
      }
    : {
        header: 'Что ты получишь от этого курса:',
        safe_content: 'Умение создавать халяльный и полезный контент',
        halal_control: 'Навык фильтрации и подбора исламских материалов',
        child_friendly: 'Создание добрых и понятных видео',
        educational: 'Работа с AI (GPT) для генерации идей и сценариев',
        time_control: 'Умение выстроить стабильный контент-план',
        parent_community: 'Чат-поддержка и наставничество каждый день',
        free_access: 'Доступ ко всем материалам и шаблонам курса',
        multilingual: 'Навыки адаптации контента под разную аудиторию',
        family_friendly: 'Создание видео, которые смотрят всей семьёй',
        support_us: (
          <>
            Делая контент, ты совершаешь садака джария <br />
          </>
        ),
      };

  return (
    <ContainerLeftBox>
      <h2 style={{ textAlign: 'center' }}>{textContent.header}</h2>
      {DataTextIcon.map((item) => (
        <div key={item.id}>
          <TextIcon>
            <Box>
              <ion-icon name={item.icon}></ion-icon>
            </Box>
            <p>{textContent[item.textKey]}</p>
          </TextIcon>
          <LinePrice />
        </div>
      ))}
    </ContainerLeftBox>
  );
};

export default LeftPrice;
