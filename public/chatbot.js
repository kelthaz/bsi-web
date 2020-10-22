/* eslint-disable no-undef */
const authorization = {
  domainKey:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwcm9qZWN0IjoiYmFuY29wcGVsX2NoYXRib3RfZXMiLCJkb21haW5fa2V5X2lkIjoiQlk0TmxFdWpmNXlhNGtleGFZbGhMZzo6In0.BqWTIDaIWpG4EjinWeNgnhoH_O3lVfpFj6RpAYz1LLclkLsvvUzbjD6_6SYJkh6kPmmeQW61SbcBKyIcMGiQZw',
  inbentaKey: 'BY3kJrWCHWH3KuQTJF9OteoQL++QHFBWUrmHImI0Sy0=',
  environment: /*'production'*/ 'production',
};

const InbentaAuth = InbentaChatbotSDK.createFromDomainKey(authorization.domainKey, authorization.inbentaKey);
const rejectedEscalation = { action: 'displayChatbotMessage', value: '¿Que más puedo hacer por ti?' };
const noAgentsAvailable = { action: 'intentMatch', value: 'noAgentsAvailable' };

SDKHCAdapter.configure({
  appId: 'H1RXyZbvM',
  importBotHistory: false,
  region: 'us',
  lang: 'es',
  room () {
    return '1';
  },
  // queue: {
  //   active: true,
  //   priority: function () { return 1; }
  // }
});

function gestionaRespuesta(chatBot) {

  chatBot.subscriptions.onDisplayChatbotMessage((messageData, next) => {
    const originalString = 'Tu consulta se ha enviado';

    switch (messageData.message) {
      case originalString:
        messageData.message = 'He recibido tu información. ¿Hay algo más en lo que pueda ayudarte?';
        break;
      default:
        break;
    }

    return next(messageData);
  });
}

const configuracion = {
  lang: 'es',
  chatbotId: 'bancoppel',
  answers: {
    answerAttributes: ['ANSWER_TEXT'],
    sideBubbleAttributes: ['SIDEBUBBLE_TEXT'],
    maxRelatedContents: 3,
    maxOptions: 5,
  },
  proactiveWelcome: true,
  delayOnAnswer: 500,
  userType: 1,
  environment: authorization.environment,
  launcher: { title: '' },
  avatar: { name: 'Fernanda' },
  labels: {
    es: {
      yes: 'Si',
      no: 'No',
      'generic-error-message': 'Por favor intente con otra pregunta',
      'enter-question': 'Pregunta aquí',
      'interface-title': '¿Tienes preguntas?',
      'guest-name': 'Tu',
      'help-question': '¿Cómo te puedo ayudar?',
      thanks: '¡Gracias!',
      'rate-content': '¿Esto te fue de ayuda?',
      'form-message': 'Por favor dinos por que',
      'end-form': 'Gracias. Uno de nuestros ejecutivos se pondrá en contacto contigo muy pronto',
      submit: 'Enviar',
    },
  },
  sanitizerOptions: {
    allowedTags: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'form',
      'p',
      'a',
      'ul',
      'ol',
      'nl',
      'li',
      'b',
      'i',
      'strong',
      'em',
      'strike',
      'code',
      'hr',
      'br',
      'div',
      'table',
      'thead',
      'caption',
      'tbody',
      'tr',
      'th',
      'td',
      'pre',
      'img',
      'label',
      'input',
      'span',
      'button',
      'select',
      'optgroup',
      'option',
      'sup',
      'iframe',
    ],
    allowedAttributes: {
      a: ['href', 'id', 'class', 'name', 'target', 'data-id'],
      img: ['src'],
      div: ['id', 'class'],
      table: ['class'],
      input: ['type', 'name', 'id', 'autocomplete'],
      button: ['id', 'onclick', 'class', 'type'],
      span: ['class'],
      strong: ['class'],
      select: ['name', 'id', 'class', 'data-datos', 'data-tipo'],
      optgroup: ['label'],
      option: ['value'],
      form: ['id'],
      iframe: ['width', 'height', 'src', 'style', 'border'],
    },
    allowedClasses: {
      a: ['btnchat', 'btn', 'btn-blue', 'btn-red', 'btn-gray', 'btnverde', 'btnaqua', 'btn-fluid', 'ayuda'],
      button: ['btnchat', 'btn-gray', 'btngris', 'btnazul', 'btnazulgd', 'btnverde', 'btn_verde'],
      div: [
        'cajaform',
        'chat-renglon',
        'chat-alertas',
        'login__box-button__separator',
        'login__action-btn',
        'login-message__action',
        'login-message__action-btn',
        'producto',
        'producto-imagen',
        'producto-descripcion',
        'producto-titulo',
        'producto-precio',
        'cargando',
        'form-group',
        'precio',
        'antes',
        'ahora',
      ],
      table: ['producto-link'],
      span: ['separator', 'create', 'login__title', 'text', 'chatusuario'],
      strong: ['margenes'],
      select: ['selectmotorex'],
    },
  },
  adapters: [
    gestionaRespuesta,
    SDKlaunchNLEsclationForm(
      SDKHCAdapter.checkEscalationConditions,
      'ChatWithLiveAgentContactForm',
      rejectedEscalation,
      noAgentsAvailable,
      2
    ),
    SDKHCAdapter.build(),
  ],
};

InbentaChatbotSDK.build(InbentaAuth, configuracion);

function getParams(scriptName) {
  const scripts = document.getElementsByTagName('script');
  scripts.forEach((item) => {
    if (item.src.indexOf(`/${scriptName}`) > -1) {
      const pa = item.src.split('?').pop().split('&');
      const p = {};

      for (let j = 0; j < pa.length; j++) {
        const kv = pa[j].split('=');
        p[kv[0]] = kv[1];
      }

      return p;
    }
  });

  return {};
}
