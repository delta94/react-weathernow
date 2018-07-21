import Styled from 'styled-components';
import closeButton from '../assets/cross-out.svg';

const AutoSuggestContainer = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px;
  flex: 1;
`;

const AutoSuggestWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  background: #C9ADA7;
    box-shadow: inset 0 0 20px 2px #9A8C98;
  border-radius: 2px;
`;

const Input = Styled.input`
  border: none;
  font-size: 0.8rem;
  width: 100%;
  padding: 5px 15px;
  height: 100%;
  color: #fff;
  outline: none;
  box-shadow: inset 0 0 10px 1px rgba(0,0,0,0.2);
  /* background: #22223B; */
  background: #000;
  border-radius: 2px;
  text-transform: capitalize;
  font-family: Montserrat, arial, sans-serif;
  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
  text-align: left;
  &.label-visible {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

const Button = Styled.button`
  border: none;
  background: url(${closeButton});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  cursor: pointer;
  outline: none;
`;

const AutoSuggestListWrapper = Styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  width: 100%;
  z-index: 999;
`;

const Label = Styled.label`
    margin: 1rem;
    font-size: 0.7rem;
    font-weight: 700;
    color: rgba(0,0,0,1);
    
    background: transparent;
    /* background: #4A4E69; */
    text-transform: uppercase;
    height: 30px;
    line-height: 30px;
    font-family: Montserrat, arial, sans-serif;
`
export {
  AutoSuggestWrapper,
  Input,
  Button,
  AutoSuggestContainer,
  AutoSuggestListWrapper,
  Label
};