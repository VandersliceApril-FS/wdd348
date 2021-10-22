import ResultCard from '../ResultCard/ResultCard'
import '../SearchResults/SearchResults.css'

const styles = {
    resultsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

function SearchResults({ isLoading, searchResults }) {

    return isLoading ? (<h1>Loading...</h1>) : (
        <section style={styles.resultsContainer}>
                {searchResults.map(searchResult => (
                    <ResultCard key={searchResult._version_} result={searchResult} ></ResultCard>
                ))}
            
        </section>
    )
}

export default SearchResults
