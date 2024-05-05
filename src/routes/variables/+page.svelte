<script>
    var axios = require('axios');
    var data = JSON.stringify({
        "collection": "users",
        "database": "sob",
        "dataSource": "sob",
        "projection": {
            "_id": 1
        }
    });
    var config = {
        method: 'post',
        url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-svqctff/endpoint/data/v1/action/findOne',
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'je5FopKLCrSwLH3mCnKXp0IjwRwen5JNIyiMMSB9WlDjYdjK5FmAOtsd8268Vrk5',
        'Accept': 'application/ejson'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

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
</div>
<style>
    *, a {
        text-align: center;
        user-select: none;
    }
    input {
        width: 40px;
        font-size: 20px;
        border: none;
    }
</style>