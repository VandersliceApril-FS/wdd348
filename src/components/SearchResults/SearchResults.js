import ResultCard from '../ResultCard'
import '../SearchResults/SearchResults.css'


function SearchResults({ isLoading, searchResults }) {

    return isLoading ? (<h1>Loading...</h1>) : (
        <section>
            
                {searchResults.map(searchResult => (
                    <ResultCard key={searchResult._version_} result={searchResult} ></ResultCard>
                ))}
            
        </section>
    )
}

export default SearchResults
