import '../search-box/search-box.styles.css'

export const SearchBox = ({placeHolder, evtHandler}) => (
    <input className="search" type='search' placeholder={placeHolder} onChange={evtHandler} />
)