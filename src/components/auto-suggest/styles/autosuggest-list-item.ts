import Styled from 'styled-components';

const AutoSuggestListItemWrapper = Styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  width: 100%;
  text-transform: capitalize;
  color: #fff;
  font-family: M PLUS Rounded 1c, arial, sans-serif;
  font-size: 1rem;
  justify-content: center;
  outline: none;
  cursor: pointer;
  padding: 1rem;
  &:hover {
    background: rgba(154, 140, 152, 0.45);
    color: #fff;
  }
`;

const AutoSuggestName = Styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  > img {
    min-width: 32px;
    min-height: 32px;
  }
  > span {
    margin-left: 20px;
    margin-right: auto;
  }
`;

export {
 AutoSuggestListItemWrapper,
  AutoSuggestName,
};
