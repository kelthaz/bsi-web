import * as contentful from 'contentful';
import getConfig from 'next/config';

class PageServiceImpl {

    constructor() {
        const { publicRuntimeConfig } = getConfig();
        const { SERV_ID, SERV_ENV, SERV_TOKEN, SERV_PATH, SERV_HOST } = publicRuntimeConfig.CONTENTFUL;


        this.client = contentful.createClient({
            host: SERV_HOST,
            basePath: SERV_PATH,
            space: SERV_ID,
            accessToken: SERV_TOKEN,
            environment: SERV_ENV,
        });
    }

    async getPages(slug) {
        return await this.client.getEntries({
            'fields.slug': slug,
            'content_type': 'page',
            // query: slug,
            'include': 10
        });
    }
}

export default PageServiceImpl;