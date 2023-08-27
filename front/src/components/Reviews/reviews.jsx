import React from 'react';
import tiendas from './../../Data/dummyData'
import {MainDiv, DivNameUser, H1Title, H1Description, ReviewsDiv  } from './RevStyledComponent'

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