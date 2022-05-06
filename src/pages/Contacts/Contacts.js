import React from 'react';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import st from './Contacts.module.scss'

const Contacts = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/3')
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `The status is ${response.status}`
          );
        }
        return response.json()
      })
      .then((responseData) => {
        setData(responseData)
        setError(null)
      })
      .catch((error) => {
        console.log(error)
        setError(error)
        setData(null)
      })
      .finally(() => setLoading(false))
  }, []);
  return (
    <div className={st.root}>
      {loading && <Text element='div' disabled>Loading...</Text>}
      {error && (
        <div style={{color: 'red'}}>
          <Text element="span" strong>Error: </Text>
          <Text element="span">{error.message}</Text>
        </div>
      )}
      {data && (
        <>
          <div className={st.meta}>
            <div>
              <img src="https://picsum.photos/300/400/" alt={data.name}/>
            </div>
            <div>
              <Heading level={4}>{data.name}</Heading>
              <Text element='p'>
                <Text element='span' strong>Email: </Text>
                {data.email}
              </Text>
              <Text element='p'>
                <Text element='span' strong>Website: </Text>
                <a href={`https://${data.website}`} rel="noreferrer noopener" target="_blank">{data.website}</a>
              </Text>
              <Text element='p'>
                <Text element='span' strong>City: </Text>
                {data.address.city}
              </Text>
              <Text element='p'>
                <Text element='span' strong>Street: </Text>
                {data.address.street} {data.address.suite}
              </Text>
              <Text element='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contacts;