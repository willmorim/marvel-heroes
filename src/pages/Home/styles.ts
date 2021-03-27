import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientProps {
  colors: 'hero' | 'villian' | 'antihero' | 'alien' | 'human';
}

const colors = {
  hero: ['#005BEA', '#00C6FB'],
  villian: ['#ED1D24', '#ED1F69'],
  antihero: ['#B224EF', '#7579FF'],
  alien: ['#0BA360', '#3CBA92'],
  human: ['#FF7EB3', '#FF758C'],
};

export const Container = styled.ScrollView``;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 40}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Welcome = styled.View`
  margin-top: 40px;
`;

export const SubTitle = styled.Text`
  font-family: 'gilroy-semibold';
  font-size: 14px;
  color: #b7b7c8;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: 'gilroy-heavy';
  font-size: 32px;
  color: #313140;
`;

export const Categories = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ContentCategory = styled.ScrollView``;

export const Circle = styled(LinearGradient).attrs(props => ({
  colors: colors[props.colors],
}))<GradientProps>`
  width: 56px;
  height: 56px;
  border-radius: 50px;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.View``;
