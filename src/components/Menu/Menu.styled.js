import styled from 'styled-components';
import { ReactComponent as Close } from '../../images/svg/close.svg';

export const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    z-index: 2;
    background: ${p => p.theme.colors.mainBgColor};
    padding: 30px 20px;
`

export const WrapperTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 62px;

`

export const Button = styled.button`
    border:none;
    background: transparent;
    cursor: pointer;
`

export const CloseIcon = styled(Close)`
    width: 24px;
    height: 24px;
`
export const List = styled.ul`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
`