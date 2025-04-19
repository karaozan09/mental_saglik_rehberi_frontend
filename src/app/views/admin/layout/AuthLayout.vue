<template>
    <div class="login-container">
        <div class="login-inner-container px-4 py-6 5xl:py-16">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .login-container{
        height: 100vh;
        background-color: #8BC6EC;
        background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-inner-container{
        width: 600px;
        border:1px solid #9CB9E9;
        border-radius: 0.3rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5.5px);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    input{
        outline: 0;
    }

    @media only screen and (min-width:2600px){
        .login-inner-container{
            width: 800px;
        }
    }
    @media only screen and (max-width:576px){
        .login-inner-container{
            width: 400px;
        }
    }
    @media only screen and (max-width:400px){
        .login-inner-container{
            width: 325px;
        }
    }
    @media only screen and (max-width:350px){
        .login-inner-container{
            width: 300px;
        }
    }
</style>