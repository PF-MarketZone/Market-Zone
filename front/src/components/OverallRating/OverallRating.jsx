import React from 'react';
import styled from 'styled-components';
import tiendas from './../../Data/dummyData'

const H2Title = styled.div`
font-size: 1.2vw;
margin: 1vw;
`

const DivPricipal = styled.div`
    margin-top: 12vw;
`

const OverallRating = (props) => {
    const details = tiendas[0].products[0];

    // Calcular el promedio de calificaciones
    const ratings = details.reviews.map(review => review.rating);
    const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
    ;

    return (
        <DivPricipal>
            <div>
                <H2Title>
                    <h2>Evaluación general</h2>
                </H2Title>
                <span
                    style={{
                        fontSize: '1.5rem',
                        color: averageRating >= 1 ? 'gold' : 'gray',
                    }}
                >
                    &#9733;
                </span>
                <span>({averageRating.toFixed(1)})</span>
            </div>
        </DivPricipal>
    );
}

export default OverallRating;