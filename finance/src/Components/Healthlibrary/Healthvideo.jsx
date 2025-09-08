
import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { MdSlowMotionVideo } from "react-icons/md";

export const Healthvideo = () => {





 const video = [
        {
            id: 1,
            img: 'https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/839_App_Thumbnails_2_14_cf0335a298.jpg',
            text: 'Cervical Cancer: Causes & Prevention',
            url: 'https://www.youtube.com/watch?v=CXk7ESZL6GQ',
           time :'1.57 MINS'
        },
        {
            id: 2,
            img: 'https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/833_Dr_Kirti_14189650f9.jpg',
            text: 'Recommended Vaccinations for Women aged 18-45',
            url: 'https://www.youtube.com/watch?v=dlL58bMj-NY'
            ,time :'2.26 MINS'
        },
        {
            id: 3,
            img: 'https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/832_hath_yoga_966f37607f.jpg',
            text: '5 Amazing Benefits of Hatha Yoga',
            url: 'https://www.bajajfinservhealth.in/'
,time :'0.51 MINS'
        }
        , {
            id: 4,
            img: 'https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/829_App_Thumbnails_2_10_98fc15298d.jpg',
            text: '5 Health Benefits of Star Fruit',
            url: 'https://www.youtube.com/watch?v=Cc3AuCY6sjg'
            ,time :'0.51 MINS'
        },

        {
            id: 5,
            img: 'https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/820_358_d20aeb9d09.jpg',
            text: '5 Amazing Health Benefits of Dates',
            url: 'https://www.youtube.com/watch?v=Yxb9zUb7q_k'
            ,time :'0.51 MINS'
        },
        {
            id: 6,
            img: 'https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/819_356_023e77c26d.jpg',
            text: '5 Proven Health Benefits of Dark Chocolate',
            url: 'https://www.youtube.com/watch?v=yV7nHFj1d4o'
            ,time :'0.51 MINS'
        },

        {
            id: 7,
            img: 'https://cmsprodstorage.blob.core.windows.net/cms-prod/assets/818_359_8cf4c94672.jpg',
            text: 'Vitamin B12 Rich Foods',
            url: 'https://www.youtube.com/watch?v=beOSP5f50Nw'
            ,time :'0.46 MINS'
        },
        {
            id: 8,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/169_f918c32ac0.jpg',
            text: 'Lipid Test: 5 Important Questions Answered',
            url: 'https://www.youtube.com/watch?v=CXk7ESZL6GQ'
            ,time :'0.51 MINS'
        },
        {
            id: 9,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/292_f9b1be277e.jpg',
            text: 'Common Causes of Dry & Itchy Eyes',
            url: 'https://www.youtube.com/watch?v=dlL58bMj-NY'
            ,time :'0.51 MINS'
        },
        {
            id: 10,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/289_2806fce2c7.jpg',
            text: 'Top Benefits of Intermittent Fasting',
            url: 'https://www.bajajfinservhealth.in/'
            ,time :'0.50 MINS'

        }
        , {
            id: 11,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/283_df4726e807.png',
            text: 'Amazing Health Benefits of Avocados',
            url: 'https://www.youtube.com/watch?v=Cc3AuCY6sjg'
            ,time :'0.51 MINS'
        },

        {
            id: 12,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/287_ffbf5297e0.jpg',
            text: 'Importance of Oral Hygiene!',
            url: 'https://www.youtube.com/watch?v=Yxb9zUb7q_k'
            ,time :'0.51 MINS'
        },
        {
            id: 13,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/271_c404d868d9.jpg',
            text: 'Benefits of Ashwagandha',
            url: 'https://www.youtube.com/watch?v=yV7nHFj1d4o'
            ,time :'2.66 MINS'
        },

        {
            id: 14,
            img: 'https://bfhlprodvivantdoc.blob.core.windows.net/strapi-icons/assets/281_7d08fd8a7f.jpg',
            text: 'Tips For A Healthy Digestive System',
            url: 'https://www.youtube.com/watch?v=beOSP5f50Nw'
            ,time :'2.51 MINS'
        }
    ]





  return (
    <div>

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
                            <Card.Img variant="top" src={vid.img} style={{ height: '180px',  }} />
                            <Card.Body style={{ padding: '12px' }}>
                                <p> <MdSlowMotionVideo />{vid.time}</p>
                                <Card.Title style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '700',
                                    lineHeight: '1.2',
                                    textAlign: 'left',
                                    whiteSpace: 'normal',
                                    height: '2.5em',
                                    overflow: 'hidden',

                                }}>{vid.text}</Card.Title>
<a><h6 style={{color:'#03b5ff'}}>watch now</h6></a>

                            </Card.Body>
                        </Card>
                    </a>
                )


                )}
            </div>
        </Container>




    </div>
  )
}










