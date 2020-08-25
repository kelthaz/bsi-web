import ErrorMessages from '../../components/not-found';
import _Loader from '../../components/loader';

import Page from '../../components/page';

export const pagesComponentCollection = [
    Page,
    ErrorMessages
];

export const Loader = _Loader;

// esta variable es utilizada por content factory
global.pagesComponentCollection = pagesComponentCollection;