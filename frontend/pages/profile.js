import { data } from 'autoprefixer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/Layout';
import { fetcher } from '../lib/api';
import { getIdFromLocalCookie, getTokenFromServerCookie } from '../lib/auth';
import { useFetchUser } from '../lib/authContext';
import { PreUpload, ProfileStyle, WholeCard, TopDiv, Background, Image } from '../styles/ProfileStyle';
import Link from 'next/link';

const Profile = ({ avatar, name, age, description }) => {
  const { user, loading } = useFetchUser();
  const [image, setImage] = useState(null);
  const router = useRouter();


  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const tmpImage = event.target.files[0];
      setImage(tmpImage);
    }
  };
  const uploadToServer = async () => {
    const formData = new FormData();
    const file = image;
    formData.append('inputFile', file);
    formData.append('user_id', await getIdFromLocalCookie());
    try {
      const responseData = await fetcher('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (responseData.message === 'success') {
        router.reload('/profile');
      }
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };
  return (
    <Layout user={user}>
      <Background>
        <>
        <WholeCard>
            <TopDiv>
              <h5>{name}</h5>
            </TopDiv>
            <PreUpload>
              {/* eslint-disable @next/next/no-img-element */}
              {avatar === 'default_avatar' && (
                <div>
                  <h4>Select your profile picture!</h4>
                  <input type="file" onChange={uploadToClient} />

                  <button
                    type="submit"
                    onClick={uploadToServer}
                  >
                    Set Profile Image
                  </button>
                </div>
              )}
            </PreUpload>
            <Image>
                {avatar && (
                  <img
                    src={`https://res.cloudinary.com/dw4yarzye/image/upload/c_fill,h_4000,w_3500/v1681812991/${avatar}`}
                    alt="Profile"
                  />
                )}
            </Image>
            <ProfileStyle>
              <div class="center">
                <h2>{name}</h2>
                <h3>Age: {age}</h3>
                <p>{description}</p>
              </div>
            </ProfileStyle>
        </WholeCard>
        </>
      </Background>
    </Layout>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  const jwt = getTokenFromServerCookie(req);
  if (!jwt) {
    return {
      redirect: {
        destination: '/',
      },
    };
  } else {
    const responseData = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const avatar = responseData.avatar ? responseData.avatar : 'default_avatar';
    const name = responseData.name;
    const age = responseData.age;
    const description = responseData.description;
    return {
      props: {
        avatar,
        description,
        name,
        age,
      },
    };
  }
}
