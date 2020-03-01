const React = require('react');
const { default: Styled } = require('styled-components');

const internals = {};

module.exports = () => {

    const { HomepageContainer } = internals;

    return (
        <HomepageContainer>
            Absolutely fetching...
        </HomepageContainer>
    );
};

internals.Image = Styled.img`
    display: block;
    width: 120px;
    margin: 1.5rem auto;
`;

internals.HomepageContainer = Styled.div`
    align-self: center;
    margin: auto;
`;
