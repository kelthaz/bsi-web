import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import PublicoContainer from '../../components/core/containers/publico/PublicoContainer';
import featureRoute from '../../components/features/feature.routes';

const App = ({ index, data }) => {
  const router = useRouter();

  return <PublicoContainer servicesData={data} pageComponent={featureRoute[index]} />;
};

export async function getServerSideProps(context) {
  const data = {};
  const index = featureRoute.findIndex(({ route }) => context.resolvedUrl.includes(route));

  if (index !== -1) {
    const { services } = featureRoute[index];

    const respData = await Promise.all(services.map(({ service, params }) => service(params))).then((respArr) =>
      respArr.map((resp) => resp.data)
    );

    services.forEach(({ name }, indexService) => {
      data[name] = respData[indexService];
    });

    return {
      props: { index, data },
    };
  }
  return {
    notFound: true,
  };
}

App.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

export default App;
