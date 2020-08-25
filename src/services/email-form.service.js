import EmailFormServiceImpl from './backend/email-form.service.imp';

class EmailFormService {
    constructor() {
        this.service = new EmailFormServiceImpl();
    }

    async sendForm(idForm, toSendFields, toSendFiles) {
        return await this.service.sendForm(idForm, toSendFields, toSendFiles);
    }
}

export default EmailFormService;
