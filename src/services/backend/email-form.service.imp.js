import getConfig from 'next/config';

class EmailFormServiceImpl {


    async sendForm(idForm, toSendFields, toSendFiles) {
        const { publicRuntimeConfig } = getConfig();
        const { API_HOST } = publicRuntimeConfig;
        const { SEND_MAIL } = publicRuntimeConfig.ENDPOINTS;

        const requestBody = this.createBodyRequest(idForm, toSendFields, toSendFiles);
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            body: requestBody
        };

        const response = await fetch(`${API_HOST}${SEND_MAIL}`, requestOptions)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
            .catch((error) => {
                return {
                    status: (error && error.status) || 500,
                    text: (error && error.statusText) || ''
                };
            });

        return response;
    }


    createBodyRequest(idForm, toSendFields, toSendFiles) {

        const formRequestDTO = {
            formulario: {
                idformulario: idForm
            },
            solicituddatos: []
        };
        // construye el objeto con los datos del formulario
        Object.keys(toSendFields).map((keyItemForm) => {
            if (toSendFields[keyItemForm]) {    // si tiene algun valor, incluirlo en el objeto
                const formField = {
                    descripcion: keyItemForm,
                    valor: toSendFields[keyItemForm]
                };
                formRequestDTO.solicituddatos.push(formField);
            }
        });

        // Luego Arma el Form-Data
        const formData = new FormData();
        formData.append('data', JSON.stringify(formRequestDTO));


        // finaliza incluyendo el listado de archivos
        Object.keys(toSendFiles).map((keyItemField) => {

            toSendFiles[keyItemField].map((file) => {
                formData.append('file', file);
            });

        });

        return formData;
    }
}

export default EmailFormServiceImpl;