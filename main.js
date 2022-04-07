// Suerte :)

Vue.createApp({
    data() {
        return {
            countries: [],
            nameCountryFilter: '',
            regionCountryFilter: ''
        }
    },

    created() {
        this.fetchData();
    },
    computed:{
        nameFilter(){
            if(this.nameCountryFilter){
                return this.countries.filter(x => x.name.toLowerCase().includes(this.nameCountryFilter))
            }
            else if (this.regionCountryFilter){
                return this.countries.filter(x => x.region.toLowerCase() == this.regionCountryFilter)
            }
            return this.countries
   
           }
    },

    methods: {
        async fetchData() {
            const response = await fetch("https://restcountries.com/v2/all");
            this.countries = await response.json();
            console.log(this.countries)
            console.log(this.nameCountryFilter);
        },
        
        
    },
}).mount('#app')