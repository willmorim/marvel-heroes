import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Image = styled.ImageBackground`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 40}px;
  padding-left: 20px;
`;

export const ImageGradient = styled(LinearGradient).attrs({
  colors: ['transparent', '#000'],
})`
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 150%;
`;

export const BackToHome = styled.TouchableOpacity``;

export const Container = styled.ScrollView``;

export const InfoHero = styled.View`
  width: 200px;
  justify-content: center;
  flex: 1;
  margin-top: 250px;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-family: 'gilroy-medium';
  color: #ffff;
  margin-bottom: 5px;
`;

export const HeroName = styled.Text`
  font-size: 40px;
  font-family: 'gilroy-heavy';
  color: #ffff;
`;

export const InfoDetails = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 0 24px;
  margin-top: 32px;
`;

export const ContentInfo = styled.View``;

export const AgeText = styled.Text`
  font-family: 'gilroy-medium';
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
`;

export const WeightText = styled(AgeText)``;

export const HeightText = styled(AgeText)``;

export const UniverseText = styled(AgeText)``;

export const Biography = styled.View`
  margin: 24px 10px 24px 0;
`;

export const BiographyText = styled.Text`
  font-family: 'gilroy-medium';
  font-size: 14px;
  color: #fff;
  line-height: 15px;
`;

export const HabilityTitle = styled.Text`
  color: #fff;
  font-family: 'gilroy-bold';
  font-size: 18px;
  margin-top: 8px;
`;

export const Abilities = styled.View`
  color: #fff;
  font-family: 'gilroy-bold';
  font-size: 18px;
  margin-right: 20px;
  margin-top: 24px;
`;

export const AbilityContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AbilityName = styled.Text`
  color: #fff;
  font-family: 'gilroy-regular';
  font-size: 12px;
  padding: 15px 0;
`;

export const TitleMovie = styled.Text`
  font-size: 18px;
  font-family: 'gilroy-bold';
  color: #fff;
  margin-top: 32px;
`;

export const Movies = styled.ScrollView`
  padding-bottom: 40px;
  margin-top: 20px;
`;

export const Movie = styled.Image`
  width: 140px;
  height: 230px;
  border-radius: 16px;
  margin-right: 16px;
`;
