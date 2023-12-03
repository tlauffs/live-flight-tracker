<template>
    <div class="container">
        <div class="data-header">
            <div>
                <h2>{{ flight_data_obj.flight_iata }}</h2>
                <p>{{ flight_data_obj.airline }} ({{ flight_data_obj.airline_iata }})</p>
            </div>
            <div>
                <h2>{{ flight_data_obj.status }}</h2>
                <p>{{ flight_data_obj.on_time }}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['flight_data_obj']
}
</script>
<style>

p, h2{
    margin: 0;
}

.container {
    justify-content: center;
    max-width: 40rem;
    margin: 0 auto;
    margin-top: 1rem;
    border-radius: 0.5rem;
    background-color: #E8F0FE;
    border: 1px solid black;
    -webkit-box-shadow: 0px 0px 22px 12px rgba(12, 23, 46, 0.8);
    box-shadow: 0px 0px 22px 12px rgba(12, 23, 46, 0.8);
    overflow: hidden;
}

.data-header {
    display: flex;
    justify-content: space-between;
}

.data-header > div {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 1rem 1.5rem;
    align-items: flex-start;
}

.data-header > div:nth-child(2) {
    background-color: rgb(18, 119, 18);
    overflow: hidden;
    color: white;
    padding: 1rem 1.5rem 1rem 1.5rem;
}
</style>
