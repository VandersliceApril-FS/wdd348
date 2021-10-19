import React from 'react'
import ResultsGrid from '../components/ResultsGrid'
import { Table } from 'react-bootstrap'


function SearchResults({ isLoading, searchResults }) {

    return isLoading ? (<h1>Loading...</h1>) : (
        <Table>
            <thead>
                <tr>
                    <th>Cover</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>First Published</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {searchResults.map(searchResult => (
                    <ResultsGrid key={searchResult._version_} result={searchResult} ></ResultsGrid>
                ))}
            </tbody>
            
        </Table>
    )
}

export default SearchResults
