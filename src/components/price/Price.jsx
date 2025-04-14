import { useSelector } from 'react-redux';
import LeftPrice from './LeftPrice';
import {
  BlueBox,
  BoxContainer,
  Container,
  ContainerContent,
  StyledBox,
  TextContent,
  WaveBox,
} from './PriceStyle';
import RightPrice from './RightPrice';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';

const Price = () => {
  const { languageStore } = useSelector((state) => state.umra);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 550);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const textContent = languageStore
    ? {
        title: 'БИЗДИН ПЛАТФОРМАГА КОШУЛУУ',
        description:
          'Биздин максат – балдар үчүн адал, коопсуз жана пайдалуу видеолорду сунуштоо. Платформанын өнүгүшүнө салым кошууну кааласаңыз, биз менен байланышыңыз.',
        partnersTitle: 'БИЗДИН ӨНӨКТӨШТӨР',
      }
    : {
        title: 'НАША ЦЕЛЬ — ВАШ РЕЗУЛЬТАТ',
        description:
          'Мы создаём обучение, которое помогает делать исламский контент с нуля. Наша миссия — вывести на сцену новых авторов, которые несут пользу, барраку и вдохновение через видео.',
        partnersTitle: 'ТЕ, КТО ПОДДЕРЖИВАЕТ НАШУ ИДЕЮ',
      };

  return (
    <Container id="priceSection">
      <StyledBox>
        <BoxContainer>
          <TextContent>
            <h2 style={{ textAlign: 'center' }}>{textContent.title}</h2>
            <p style={{ textAlign: 'center' }}>{textContent.description}</p>
          </TextContent>
          <ContainerContent>
            <LeftPrice />
            <RightPrice />
          </ContainerContent>
        </BoxContainer>

        <BlueBox>
          <div
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #dff9fb 100%)',
              border: '2px solid #c2f0ff',
              borderRadius: '24px',
              padding: isMobile ? '25px 15px' : '40px 30px',
              maxWidth: isMobile ? '250px' : '520px',
              marginInline: 'auto',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              marginTop: 440,
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? '26px' : '32px',
                fontWeight: '800',
                marginBottom: '16px',
                color: 'red',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Успей по скидке!
            </h3>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: isMobile ? '15px' : '17px',
                lineHeight: '1.9',
                color: '#212529',
              }}
            >
              <li>
                ✅ До <strong>20 апрелья</strong> —{' '}
                <span style={{ color: '#198754', fontWeight: 'bold' }}>
                  10 000₽
                </span>{' '}
                <em style={{ color: '#6c757d' }}>(скидка 50%)</em>
              </li>
              <li>
                ✅ До <strong>25 апрелья</strong> —{' '}
                <span style={{ color: '#ffc107', fontWeight: 'bold' }}>
                  15 000₽
                </span>{' '}
                <em style={{ color: '#6c757d' }}>(скидка 25%)</em>
              </li>
              <li>
                ⏳ После <strong>25 апрелья</strong> —{' '}
                <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
                  20 000₽
                </span>{' '}
                <em style={{ color: '#6c757d' }}>(полная цена)</em>
              </li>
            </ul>
          </div>
        </BlueBox>

        <WaveBox />
      </StyledBox>
    </Container>
  );
};

export default Price;
