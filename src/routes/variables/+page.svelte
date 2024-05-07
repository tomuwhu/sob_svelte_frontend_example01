<script>
    import {base} from "$app/paths";
    var x = 10;
    $: x2 = x*x
</script>
<h1>SOB SvelteKit Példaprogramok</h1>
<h3>1. oldal: Változók, Input, Output</h3>
<div>
<a href="{base}/">Vissza a menühöz</a>
    <hr>
    <button on:click={()=>x--}>- </button>
    <input type="number" bind:value={x}>
    <button on:click={()=>x++}>+</button>
    <h2>{x}<sup>2</sup> = {x2}</h2>
    <input type="range" bind:value={x}>
</div>
<style>
    *, a {
        text-align: center;
        user-select: none;
    }
    input {
        width: 80px;
        font-size: 20px;
        border: none;
    }
    input[type="range"] {
        width: 300px;
    }
</style>