import PageServiceImpl from '../cms/core-contentful/services/page.service.impl';

class PageService {

    constructor() {
        this.pageServiceImpl = new PageServiceImpl();
    }


    async getPages(slug) {
        return await this.pageServiceImpl.getPages(slug);
    }
}

export default PageService;