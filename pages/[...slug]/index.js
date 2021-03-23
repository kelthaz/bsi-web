import PropTypes from 'prop-types';
import LoginContainer from '../../components/core/containers/login/LoginContainer';
import PrivadoContainer from '../../components/core/containers/privado/container/PrivadoContainer';
import PublicoContainer from '../../components/core/containers/publico/container/PublicoContainer';
import SolicitudContainer from '../../components/core/containers/solicitud/container/SolicitudContainer';
import featureRoute from '../../components/features/feature.routes';
import { INICIAR_SESION } from '../../constants/routes/login/login';

const App = ({ index, data, userData }) => {
  const { feature } = featureRoute[index];

  switch (feature) {
    case 'privado':
      return <PrivadoContainer servicesData={data} pageComponent={featureRoute[index]} />;

    case 'publico':
      return <PublicoContainer servicesData={data} pageComponent={featureRoute[index]} />;

    case 'solicitud':
      return <SolicitudContainer servicesData={data} pageComponent={featureRoute[index]} userData={userData} />;

    case 'login':
      return <LoginContainer servicesData={data} pageComponent={featureRoute[index]} userData={userData} />;

    default:
      return <PublicoContainer servicesData={data} pageComponent={featureRoute[index]} />;
  }
};

export async function getServerSideProps(context) {
  const data = {};
  let userData = {};

  const index = featureRoute.findIndex(({ route }) => context.resolvedUrl.split('?')[0] === route);

  if (index !== -1 && featureRoute[index].roles.length > 0) {
    const { cookie } = context.req.headers;

    if (cookie) {
      const token = cookie.split('; ').reduce((total, currentCookie) => {
        const [storedKey, storedValue] = currentCookie.split('=');
        return storedKey === 'token' ? decodeURIComponent(storedValue) : total;
      }, '');
      userData = token && JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    }

    if (!cookie && Object.keys(userData).length === 0) {
      return {
        redirect: {
          destination: INICIAR_SESION,
          permanent: false,
        },
      };
    }
  }

  if (index !== -1) {
    const { services } = featureRoute[index];
    const respData = await Promise.all(services.map(({ service, params }) => service(params))).then((respArr) =>
      respArr.map((resp) => resp.data)
    );

    services.forEach(({ name }, indexService) => {
      data[name] = respData[indexService];
    });

    return {
      props: { index, data, userData },
    };
  }

  return {
    notFound: true,
  };
}

App.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
};

export default App;
