import React from 'react';
import styled from 'styled-components';
import tiendas from './../../Data/dummyData'


const MainDiv = styled.div`
width: 50%;
margin: 3vw;
color: black;
`

const DivNameUser = styled.div`
display: flex;
justify-content: space-between;
font-size: 1.2vw;
height: 4vw;
margin: 1vw;
`
const H1Title = styled.h1`
margin: 1vw;
font-size: 1.3vw;
color: black;
`
const H1Description = styled.h1`
margin: 1vw;
font-size: 1.2vw;
font-weight: lighter;
color: black;
`

const ReviewsDiv = styled.div`
margin: 3vw;
`
const Reviews = (props) => {
    const details = tiendas[0].products[0];
    

    return (
        <MainDiv>
            <h1>Reviews</h1>
            {details.reviews && details.reviews.map(({ id, nameUser, rating, title, description }) => (
                <ReviewsDiv key={id}>
                    <DivNameUser>
                        <h2>{nameUser}</h2>
                        <div>
                            {Array.from({ length: 5 }, (_, index) => (
                                <span
                                key={index}
                                style={{
                                  fontSize: '1.5rem',
                                  color: index < rating ? 'gold' : 'gray',
                                }}
                              >
                                &#9733;
                              </span>
                            ))}
                        </div>
                    </DivNameUser>
                    <H1Title>{title}</H1Title>
                    <H1Description>{description}</H1Description>
                </ReviewsDiv>
            ))}


        </MainDiv>
    )
}
export default Reviews;