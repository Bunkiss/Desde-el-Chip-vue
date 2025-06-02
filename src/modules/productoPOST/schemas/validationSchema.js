import * as yup from 'yup';

export const schema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    image_url: yup.string().url().required(),
    factory_url: yup.string().url().required()
});