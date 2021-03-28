import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Content,
  Header,
  Welcome,
  SubTitle,
  Title,
  Categories,
  ContentCategory,
  Circle,
  Section,
} from './styles';

import MenuImg from '../../assets/icons/menu.svg';
import MarvelImg from '../../assets/icons/marvel.svg';
import Search from '../../assets/icons/search.svg';
import Hero from '../../assets/icons/hero.svg';
import Villain from '../../assets/icons/villain.svg';
import AntiHero from '../../assets/icons/antihero.svg';
import Alien from '../../assets/icons/alien.svg';
import Human from '../../assets/icons/human.svg';

import { Category } from '../../components/Category';
import { Card } from '../../components/Card';

interface ICharacter {
  id: string;
  name: string;
  category: string;
  alterEgo: string;
  imagePath: string;
}

export function Home() {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    api.get('/').then(({ data }) => setCharacters(data));
  }, []);

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Content>
        <Header>
          <MenuImg />
          <MarvelImg />
          <Search />
        </Header>

        <Welcome>
          <SubTitle>Bem vindo ao marvel Heroes</SubTitle>
          <Title>Escolha seu personagem</Title>
        </Welcome>

        <Categories>
          <Circle colors="hero">
            <Hero />
          </Circle>
          <Circle colors="villian">
            <Villain />
          </Circle>
          <Circle colors="antihero">
            <AntiHero />
          </Circle>
          <Circle colors="alien">
            <Alien />
          </Circle>
          <Circle colors="human">
            <Human />
          </Circle>
        </Categories>

        <Section>
          <Category title="Heróis" />
          <ContentCategory horizontal showsHorizontalScrollIndicator={false}>
            {characters
              .filter(character => character.category === 'heroes')
              .map(character => (
                <TouchableOpacity
                  key={String(character.id)}
                  onPress={() => navigation.navigate('Details', { character })}
                  activeOpacity={0.6}
                >
                  <Card
                    name={character.name}
                    alterEgo={character.alterEgo}
                    imagePath={character.imagePath}
                  />
                </TouchableOpacity>
              ))}
          </ContentCategory>

          <Category title="Vilões" />
          <ContentCategory horizontal showsHorizontalScrollIndicator={false}>
            {characters
              .filter(character => character.category === 'villains')
              .map(character => (
                <TouchableOpacity
                  key={String(character.id)}
                  onPress={() => navigation.navigate('Details', { character })}
                  activeOpacity={0.6}
                >
                  <Card
                    name={character.name}
                    alterEgo={character.alterEgo}
                    imagePath={character.imagePath}
                  />
                </TouchableOpacity>
              ))}
          </ContentCategory>

          <Category title="Anti-Heróios" />
          <ContentCategory horizontal showsHorizontalScrollIndicator={false}>
            {characters
              .filter(character => character.category === 'antiHeroes')
              .map(character => (
                <TouchableOpacity
                  key={String(character.id)}
                  onPress={() => navigation.navigate('Details', { character })}
                  activeOpacity={0.6}
                >
                  <Card
                    name={character.name}
                    alterEgo={character.alterEgo}
                    imagePath={character.imagePath}
                  />
                </TouchableOpacity>
              ))}
          </ContentCategory>

          <Category title="Alienígenas" />
          <ContentCategory horizontal showsHorizontalScrollIndicator={false}>
            {characters
              .filter(character => character.category === 'aliens')
              .map(character => (
                <TouchableOpacity
                  key={String(character.id)}
                  onPress={() => navigation.navigate('Details', { character })}
                  activeOpacity={0.6}
                >
                  <Card
                    name={character.name}
                    alterEgo={character.alterEgo}
                    imagePath={character.imagePath}
                  />
                </TouchableOpacity>
              ))}
          </ContentCategory>

          <Category title="Humanos" />
          <ContentCategory horizontal showsHorizontalScrollIndicator={false}>
            {characters
              .filter(character => character.category === 'humans')
              .map(character => (
                <TouchableOpacity
                  key={String(character.id)}
                  onPress={() => navigation.navigate('Details', { character })}
                  activeOpacity={0.6}
                >
                  <Card
                    name={character.name}
                    alterEgo={character.alterEgo}
                    imagePath={character.imagePath}
                  />
                </TouchableOpacity>
              ))}
          </ContentCategory>
        </Section>
      </Content>
    </Container>
  );
}
