<template>
    <div v-if="isSearch" class="search-container flex mb-8"> 
        <v-text-field
            v-model="search"
            density="compact"
            label="Ara..."
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
        ></v-text-field>
    </div>
    
    <v-layout v-resize="onResize" class="z-0">
        <v-data-table
            :hide-default-header="isMobile"
            :class="{'mobile': isMobile}"
            :headers="headers"
            :items="items"
            :loading="loading"
            :pagination="true"
            v-model:search="search"
            no-data-text="Veri bulunamadı"
            loading-text="Veriler yükleniyor, lütfen bekleyin..."
        >
            <template v-slot:item="{ item }">
                <tr v-if="!isMobile">
                    <td v-for="(header, index) in headers" :key="index" class="text-center">
                        <!-- Güncellme, silme veya gösterme gibi işlemlerin yapıldığı kolon -->
                        <template v-if="header.value === 'process'">
                           <div class="flex justify-center items-center gap-5">
                                <PageUpdate v-if="isBtnUpdate && !isBtnUpdateModal" :updateViewName="updateViewName" :itemId="item.id" />
                                <ModalUpdate v-if="isBtnUpdate && isBtnUpdateModal"  @editItem="editItem" @update="handleUpdate" :dialogs="dialogs" :updateModalSchema="updateModalSchema" :updateModalElementData="updateModalElementData" :updateModalData="updateModalData" :itemId="item.id"/>
                                <Delete @delete="handleDelete" v-if="isBtnDelete" :itemId="item.id" />
                           </div>
                        </template>

                        <!-- Resimleri göstermek için kullanılan kolon -->
                        <Image  v-else-if="header.value === 'image'" class="mx-auto" :url="item[imagePropsName]"/>

                        <!-- Veriyi aktif veya pasif etmek için kullanılan kolon -->
                        <IsActive v-else-if="header.value === 'isActive'" @isActive="isActive" :status="item[isActivePropsName]" :itemId="item.id"/>

                        <!-- pdf veya görsel gibi verileri farklı bir sekmede açmak için kullanılıyor -->
                        <ShowOnPage v-else-if="header.value === 'show'" :url="item[showPropsUrl]" :showTitle="showTitle"/>
                        
                        <!-- Yukarıda belirtilen veri türleri yoksa direk gelen veriyi bas -->
                        <p v-else class="break-all"> {{ item[header.value] }}</p>
                           
                    </td>
                </tr>

                <tr v-else>
                    <ul class="flex-content">
                        <li v-for="(header, index) in headers" :key="index" class="flex-item mb-3" :data-label="header.title">
                            <template v-if="header.value === 'process'">
                                <div class="flex-item-inner w-full flex items-center gap-5">
                                    <PageUpdate v-if="isBtnUpdate && !isBtnUpdateModal" :updateViewName="updateViewName" :itemId="item.id" />
                                    <ModalUpdate v-if="isBtnUpdate && isBtnUpdateModal"  @editItem="editItem" @update="handleUpdate" :dialogs="dialogs" :updateModalSchema="updateModalSchema" :updateModalElementData="updateModalElementData" :updateModalData="updateModalData" :itemId="item.id"/>
                                    <Delete @delete="handleDelete" v-if="isBtnDelete" :itemId="item.id" />
                                </div>
                            </template>
                            
                            <Image  v-else-if="header.value === 'image'" :url="item[imagePropsName]"/>
                    
                            <IsActive v-else-if="header.value === 'isActive'" @isActive="isActive" :status="item[isActivePropsName]" :itemId="item.id"/>
            
                            <ShowOnPage v-else-if="header.value === 'show'" :url="item[showPropsUrl]" :showTitle="showTitle"/>
                            
                            <p v-else class="break-all"> {{ item[header.value] }}</p>
                        </li>
                    </ul>
                </tr>
            </template>
        </v-data-table>
    </v-layout>
</template>

<script>
import { ref } from 'vue';
import ModalUpdate from './process/ModalUpdate.vue';
import PageUpdate from './process/PageUpdate.vue';
import Delete from './process/Delete.vue';
import Image from './image/Image.vue';
import IsActive from './status/IsActive.vue';
import ShowOnPage from './show/ShowOnPage.vue';

export default {
    components:{
        Image,
        ShowOnPage,
        IsActive,
        ModalUpdate,
        PageUpdate,
        Delete
    },
    emits: ['update', 'delete', 'editItem', 'isActive'],
    props: [    
    'headers',
    'items',
    'isSearch',
    'showTitle',
    'showPropsUrl',
    'imagePropsName',
    'isActivePropsName',
    'isBtnDelete',
    'isBtnUpdate',
    'updateViewName',
    'isBtnUpdateModal',
    'updateModalElementData',
    'updateModalData',
    'updateModalSchema',
    'dialogs',
    'loading'
    ],
    setup(props,{ emit }) {
        const isMobile = ref(false);
        const search = ref('');

        function onResize() {
            isMobile.value = window.innerWidth < 769;
        }

        function isActive(id){
            emit('isActive', id)
        }

        function handleUpdate(values){
            emit('update', values)
        }
        function handleDelete(id){
            emit('delete', id)
        }
        function editItem(id){
            emit('editItem', id)
        }

        return {
            onResize,
            isMobile,
            search,
            isActive,
            handleUpdate,
            handleDelete,
            editItem
        };
    },
};
</script>

<style scoped>
.order-1{
    cursor: pointer;
}
</style>
