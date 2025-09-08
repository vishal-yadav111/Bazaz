import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const Heathvideo = () => {
    const video = [
        {
            id: 1,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/169_f918c32ac0.jpg',
            text: 'Lipid Test: 5 Important Questions Answered',
            url: 'https://www.youtube.com/watch?v=CXk7ESZL6GQ'
        },
        {
            id: 2,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/292_f9b1be277e.jpg',
            text: 'Common Causes of Dry & Itchy Eyes',
            url: 'https://www.youtube.com/watch?v=dlL58bMj-NY'
        },
        {
            id: 3,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/289_2806fce2c7.jpg',
            text: 'Top Benefits of Intermittent Fasting',
            url: 'https://www.bajajfinservhealth.in/'

        }
        , {
            id: 4,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/283_df4726e807.png',
            text: 'Amazing Health Benefits of Avocados',
            url: 'https://www.youtube.com/watch?v=Cc3AuCY6sjg'
        },

        {
            id: 5,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/287_ffbf5297e0.jpg',
            text: 'Importance of Oral Hygiene!',
            url: 'https://www.youtube.com/watch?v=Yxb9zUb7q_k'
        },
        {
            id: 6,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/271_c404d868d9.jpg',
            text: 'Benefits of Ashwagandha',
            url: 'https://www.youtube.com/watch?v=yV7nHFj1d4o'
        },

        {
            id: 7,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/281_7d08fd8a7f.jpg',
            text: 'Tips For A Healthy Digestive System',
            url: 'https://www.youtube.com/watch?v=beOSP5f50Nw'
        }
    ]
    return (

        <Container className='mt-3 ' >
            <h2>Health Video</h2>
            <div style={{
                display: 'flex',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                gap: '20px',
                padding: '30px 0 ',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'



            }}>
                {video.map((vid) => (

                    <a
                        key={vid.id}
                        href={vid.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >


                        <Card style={{ minWidth: '15rem', gap: '15px', flex: '0 0 auto', backgroundColor: 'white' }}>
                            <Card.Img variant="top" src={vid.img} style={{ height: '300px', objectFit: 'cover' }} />
                            <Card.Body style={{ padding: '12px' }}>
                                <Card.Title style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '700',
                                    lineHeight: '1.2',
                                    textAlign: 'left',
                                    whiteSpace: 'normal',
                                    height: '2.5em',
                                    overflow: 'hidden',

                                }}>{vid.text}</Card.Title>


                            </Card.Body>
                        </Card>
                    </a>
                )


                )}
            </div>
        </Container>




    )
}
