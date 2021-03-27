import styled from 'styled-components/native';

interface ILevelProps {
  color: boolean;
  height: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Level = styled.View<ILevelProps>`
  background-color: ${props => (props.color ? '#fff' : '#313140')};
  margin-right: 4px;
  width: 2px;
  height: ${props => (props.height ? '12px' : '8px')};
`;
