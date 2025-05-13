<template>
    <v-dialog class="lg:w-2/3" v-model="dialogs[itemId]">
        <template v-slot:activator="{ props: activatorProps }">
            <v-icon v-bind="activatorProps" @click="$emit('editItem', itemId)" class="text-xl text-gray-700">
                mdi-pencil
            </v-icon>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Güncelle">
            <v-card-actions class="position-absolute right-0 top-2">
                <v-btn @click="isActive.value = false">
                <i class="mdi mdi-close text-2xl"/>
                </v-btn>
            </v-card-actions>
            <v-card-text>
                <Form 
                v-bind="updateModalSchema ? { 'validation-schema': updateModalSchema } : {}"
                @submit="handleUpdate"
                class="flex flex-wrap justify-between gap-7 mt-5 mb-2 5xl:mb-5 sm:px-8">
                    <Field type="hidden" name="id" v-model="updateModalData.id"/>
                    <div v-for="element in updateModalElementData" :key="element.id" :class="{'sm:w-[calc(50%-1rem)]' : element.size == '50%','flex-col' : element.type != 'checkbox' && element.type != 'radio'}" class="flex w-full">
                        <label :for="element.type + updateModalData.id" :class="{'order-1' : element.type == 'checkbox' || element.type == 'radio'}" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">{{element.labelText}} <span v-if="element.required" class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span></label>
                        <Field :id="element.type + updateModalData.id" v-if="element.element == 'input' && element.type != 'file'" :type="element.type" :name="element.name"
                            :class="{
                            'bg-gray-50 block w-full rounded-md border-0 py-1 3xl:py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400': element.element == 'input' && (element.type != 'checkbox' && element.type != 'radio' && element.type != 'file'),
                            'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 me-2' : element.element == 'input' && element.type == 'checkbox' || element.type == 'radio'
                            }"
                            :value="element.type === 'checkbox' ? true : null"
                            v-model="updateModalData[element.name]"
                        />
                        <Field 
                            v-else-if="element.element == 'input' && element.type == 'file'"
                            :id="element.type + updateModalData.id"
                            :type="element.type"
                            :name="element.name"
                            class="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                            :multiple="element.isMultiple"
                        />
                        <Field 
                            v-else-if="element.element == 'select'"
                            v-model="updateModalData.selectedOption"
                            :id="element.type + updateModalData.id"
                            as="select"
                            :name="element.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-2.5 5xl:py-3"
                            >
                            <option value="" selected>Seçim yapın</option>
                            <option v-for="option in updateModalData.options" :key="option" :value="option">
                                {{ option }}
                            </option>
                        </Field>
                        <ckeditor
                            v-else-if="element.element == 'ckeditor'"
                            :editor="editor"
                            :config="editorConfig"
                            tag-name="textarea"
                            v-model="updateModalData[element.name]"
                            :name="element.name"
                        />    
                        <span v-if="!updateModalSchema" class="text-sm text-red-600 font-medium error-update-message" :data-update-err="element.name"></span>
                        <ErrorMessage v-else class="text-sm text-red-600 font-medium" :name="element.name" />
                    </div>
                    <div class="w-full"> 
                    <button type="submit" class="w-full !bg-green-500  py-1.5 !capitalize text-white 5xl:text-2xl rounded font-semibold tracking-widest text-shadow border shadow">
                        Güncelle
                    </button>
                    </div>
                </Form>
            </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, FontColor, FontSize, FontFamily,Alignment } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { Field, Form, ErrorMessage } from 'vee-validate';
import {ref } from 'vue';

export default {
    props: ['dialogs','updateModalSchema','updateModalElementData','updateModalData','itemId'],
    emits: ['update', 'editItem'],
    components:{
        Field,
        Form,
        ErrorMessage,
    },
    setup(props,{emit}){
        const editor = ClassicEditor;
        const editorConfig = ref({
            plugins: [ Bold, Essentials, Italic, Mention, Paragraph, Undo, FontColor, FontSize, FontFamily,Alignment ],
            toolbar: ['fontFamily', '|', 'bold', 'italic', '|', 'fontSize', 'fontColor','alignment','|', 'undo', 'redo',  ],
            alignment: {
                options: [ 'left', 'center', 'right', 'justify' ]
            },
            fontSize: {
                options: [ '12px', '14px', '16px', '18px', '20px', '24px', '28px','32px' ]
            },
            fontColor: {
                columns: 5,
                documentColors: 10
            },
            fontFamily: {
                options: [
                    'default',
                    'Arial, Helvetica, sans-serif',
                    'Courier New, Courier, monospace',
                    'Georgia, serif',
                    'Lucida Sans Unicode, Lucida Grande, sans-serif',
                    'Tahoma, Geneva, sans-serif',
                    'Times New Roman, Times, serif',
                    'Trebuchet MS, Helvetica, sans-serif',
                    'Verdana, Geneva, sans-serif'
                ],
                supportAllValues: false
            },
        });

        function handleUpdate(values){
            emit('update', values)
        }

        return{
          editor,
          editorConfig,
          handleUpdate,
        }
    }
}
</script>

<style>

</style>