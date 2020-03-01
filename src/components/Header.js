const React = require('react');
const { default: Styled } = require('styled-components');
const { default: Logo } = require('../assets/logo.svg');

console.log(Logo);

const internals = {};

module.exports = () => {

    const { Header, StyledLogo, Hamburger } = internals;

    return (
        <Header position='static'>
            <Hamburger />
            <StyledLogo />
            <Hamburger />
        </Header>
    );
};

internals.Header = Styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: #222;
`;

internals.Hamburger = Styled.button`
    display: block;
    position: relative;
    width: 2.5em;
    height: 3em;
    padding: 0;
    border: none;
    background: none;
    outline: none;

    &:before {
        content: '';
        position: absolute;
        top: 33.3333%;
        left: 0;
        right: 0;
        height: 3px;
        background: white;
    }

    &:after {
        content: '';
        position: absolute;
        top: 66.6667%;
        left: 0;
        right: 0;
        height: 3px;
        background: white;
    }
`;

internals.StyledLogo = Styled(Logo)`
    width: 4em;
    fill: white;
`;
