<template>
    <Form :validation-schema="schema" id="formPOST" @submit="onSubmit">
        <div class="form">
            <label for="title">Title:</label>
            <Field type="text" id="title" name="title" /> <!--cambiamos los input por Fiel-->
            <ErrorMessage name="title"></ErrorMessage>
        </div>
        <div class="form">
            <label for="description">Description:</label>
            <Field type="text" id="description" name="description" />
            <ErrorMessage name="description"></ErrorMessage>
        </div>
        <div class="form">
            <label for="image_url">Image URL:</label>
            <Field type="url" id="image_url" name="image_url" />
            <ErrorMessage name="image_url"></ErrorMessage>
        </div>
        <div class="form">
            <label for="factory_url">Factory URL:</label>
            <Field type="url" id="factory_url" name="factory_url" />
            <ErrorMessage name="factory_url"></ErrorMessage>
        </div>
        <div class="form">
            <label for="features">Features:</label>
            <div id="features">
                <div class="feature">
                    <input type="text" placeholder="Feature Name" class="feature-name">
                    <input type="text" placeholder="Feature Description" class="feature-description">
                </div>
            </div>

            <button type="button" id="addFeatureBtn">Agregar Feature</button>
        </div>
        
        <button type="submit">Enviar</button>
    </Form>
        
        <p id="error-message" style="color: red;"></p>
        
        <div id="submittedData">
            <h2>Producto agregado</h2>
            <div id="dataDisplay"></div>
        </div>
</template>

<script setup>
import {Form, Field} from 'vee-validate';
import {schema} from '@/schemas/validationSchema';

const onSubmit = () => {
    console.log('Producto agregado'); 
}
</script>