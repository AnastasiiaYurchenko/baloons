import styled from 'styled-components';

import { ReactComponent as UserAvatar } from '../../images/svg/user-avatar.svg';

export const ReviewItem = styled.div`
    background: ${p => p.theme.colors.secondaryAccentColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 24px;
    padding: 24px;
    /* width: 320px; */
    height: 229px;

    @media screen and (min-width: 768px){
        height: 220px;
    }

    @media screen and (min-width: 1280px){
        padding: 36px 24px;
        height: 277px;
    }
`

export const ReviewText = styled.p`
    font-family: 'InterMedium';
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: ${p => p.theme.colors.mainTextColor};

    @media screen and (min-width: 1280px){
    font-size: 24px;
    line-height: 1;
    }
`

export const Avatar = styled(UserAvatar)`
    width: 24px;
    height: 24px;
`

export const BottomWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const Author = styled.p`
    font-family: 'InterMedium';
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    letter-spacing: -0.01em;
    color: ${p => p.theme.colors.secondaryTextColor};

    @media screen and (min-width: 1280px){
        color: ${p => p.theme.colors.mainTextColor};
    }
`