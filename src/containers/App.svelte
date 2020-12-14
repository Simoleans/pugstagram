<script>
    import { onMount } from 'svelte';
    import Header from '../components/Header.svelte';
    import Main from '../components/Main.svelte';
    import TimeLine from '../components/TimeLine.svelte';
    import Sidebar from '../components/Sidebar.svelte';

    let data = {};
    let error = false;
    const API = "https://us-central1-pugstagram-co.cloudfunctions.net/data";
  
    onMount(async () => { //poner simepr etry catch y abajo en el html su validación
        try {
        const response = await fetch(API);
        data = await response.json();
        } catch (err) {
        error = true;
        }
    })
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');


    :global(body){
        background-color:#FAFAFA;
        color: rgba(38,38,38,0.7);
        font-family: "Lato", sans-serif;
        margin: 0;
        padding: 0;
    }

    :global(h1, h2, h3){
        margin: 0;
        padding: 0;
    }
</style>

<Header />
<Main>
    {#if data.posts}
        <TimeLine posts={data.posts} />
        <Sidebar {...data.user}/>
    {:else}
        <p>{error ? 'Lo sentimos ha ocurrido un error, Actualiza la pagina.' : 'Cargando...'}</p>
    {/if}
</Main>