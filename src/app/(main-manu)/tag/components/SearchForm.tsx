'use client'

export function SearchForm() {
    return (
        <>
            <div>
                <label>Search tag : </label>
                <input type="text" id="tag" name="tag" autoFocus/>
                <button type="submit">search</button>
                <button type="reset">reset</button>
            </div>
        </>
    )
}

export function SearchFormById() {
    return (
        <>
            <div>
                <label>Search tag : </label>
                <input type="text" id="tag" name="id" autoFocus/>
                <button type="submit">search</button>
                <button type="reset">reset</button>
            </div>
        </>
    )
}