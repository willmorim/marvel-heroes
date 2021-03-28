import 'react-native-gesture-handler';
import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Image,
  ImageGradient,
  BackToHome,
  Container,
  InfoHero,
  Name,
  HeroName,
  InfoDetails,
  ContentInfo,
  AgeText,
  WeightText,
  HeightText,
  UniverseText,
  Biography,
  BiographyText,
  HabilityTitle,
  Abilities,
  AbilityContent,
  AbilityName,
  Movies,
  Movie,
  TitleMovie,
} from './styles';

import Back from '../../assets/icons/back.svg';
import Age from '../../assets/icons/age.svg';
import Weight from '../../assets/icons/weight.svg';
import Height from '../../assets/icons/height.svg';
import Universe from '../../assets/icons/universe.svg';

import { AbilitiesLevel } from '../../components/AbilitiesLevel';

interface IDetailsCharacter {
  character: {
    name: string;
    alterEgo: string;
    imagePath: string;
    biography: string;
    caracteristics: {
      birth: number;
      weight: {
        value: number;
        unity: string;
      };
      height: {
        value: number;
        unity: string;
      };
      universe: string;
    };
    abilities: {
      force: number;
      intelligence: number;
      agility: number;
      endurance: number;
      velocity: number;
    };
    movies: string[];
  };
}

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as IDetailsCharacter;

  const { character } = routeParams;

  return (
    <Image source={{ uri: `http://localhost:3333/${character.imagePath}` }}>
      <ImageGradient />
      <BackToHome onPress={() => navigation.goBack()}>
        <Back />
      </BackToHome>

      <Container>
        <InfoHero>
          <Name>{character.alterEgo}</Name>
          <HeroName>{character.name}</HeroName>
        </InfoHero>

        <InfoDetails>
          <ContentInfo>
            <Age />
            <AgeText>{`${
              new Date().getFullYear() - character.caracteristics.birth
            } anos`}</AgeText>
          </ContentInfo>

          <ContentInfo>
            <Weight />
            <WeightText>
              {character.caracteristics.weight.value}
              {character.caracteristics.weight.unity}
            </WeightText>
          </ContentInfo>

          <ContentInfo>
            <Height />
            <HeightText>
              {character.caracteristics.height.value}
              {character.caracteristics.height.unity}
            </HeightText>
          </ContentInfo>

          <ContentInfo>
            <Universe />
            <UniverseText>{character.caracteristics.universe}</UniverseText>
          </ContentInfo>
        </InfoDetails>

        <Biography>
          <BiographyText>{character.biography}</BiographyText>
        </Biography>

        <HabilityTitle>Habilidades</HabilityTitle>

        <Abilities>
          <AbilityContent>
            <AbilityName>Força</AbilityName>
            <AbilitiesLevel level={character.abilities.force} />
          </AbilityContent>

          <AbilityContent>
            <AbilityName>Inteligência</AbilityName>
            <AbilitiesLevel level={character.abilities.intelligence} />
          </AbilityContent>

          <AbilityContent>
            <AbilityName>Agilidade</AbilityName>
            <AbilitiesLevel level={character.abilities.agility} />
          </AbilityContent>

          <AbilityContent>
            <AbilityName>Resistência</AbilityName>
            <AbilitiesLevel level={character.abilities.endurance} />
          </AbilityContent>

          <AbilityContent>
            <AbilityName>Velocidade</AbilityName>
            <AbilitiesLevel level={character.abilities.velocity} />
          </AbilityContent>
        </Abilities>

        <TitleMovie>Filmes</TitleMovie>

        <Movies horizontal showsHorizontalScrollIndicator={false}>
          {character.movies.map(movie => (
            <Movie
              key={String(movie)}
              source={{ uri: `http://localhost:3333/${movie}` }}
            />
          ))}
        </Movies>
      </Container>
    </Image>
  );
}
