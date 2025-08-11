document.addEventListener('DOMContentLoaded', () => {
    // Função para buscar os dados de um país específico
    async function fetchCountryData(countryCode, flagId) {
        try {
            // URL da API Restcountries para um país específico
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            const country = await response.json();

            // Dados do país
            const countryData = country[0]; // A API retorna uma lista, então pegamos o primeiro item

            // Preenchendo a bandeira do país
            document.querySelector(`#${flagId}`).src = countryData.flags.svg;

        } catch (error) {
            console.error("Erro ao buscar dados do país:", error);
        }
    }

    // Carregar dados dos países assim que a página for carregada
    fetchCountryData('BR', 'brazil-flag');   // Brasil
    fetchCountryData('EG', 'egypt-flag');    // Egito
    fetchCountryData('US', 'usa-flag');      // EUA
    fetchCountryData('DE', 'germany-flag');  // Alemanha
    fetchCountryData('GB', 'uk-flag');       // Reino Unido
});