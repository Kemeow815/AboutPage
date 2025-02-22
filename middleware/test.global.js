export default defineNuxtRouteMiddleware((to,from)=>{
    console.log(to.path);
    if(to.path === "/admin"){
        return navigateTo("/login")
    }else{
        return true
    }
})