import ResultCard from './ResultCard'


function SearchResults({ isLoading, searchResults }) {

    return isLoading ? (<h1>Loading...</h1>) : (
        <section className="resultsContainer">
                {searchResults.map(searchResult => (
                    <ResultCard key={searchResult._version_} result={searchResult} ></ResultCard>
                ))}
            
        </section>
    )
}

export default SearchResults
