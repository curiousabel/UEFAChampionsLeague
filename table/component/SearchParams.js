import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () =>{ 
   // const location = "Settle, WA"
    const [location,setlocation] = useState("");
    const [animal,setAnmial] = useState("");
    return( 
        <div className="search-params">
            <form> 
                <label htmlFor="location">
                    location 
                    <input id="location" value={location} placeholder="Location"
                    onChange={(e) => setlocation(e.target.value)}
                    ></input>
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                    id="animal"
                    value={animal}
                    onChange={(e) => {
                        setAnmial(e.target.value)
                        setBreed("")
                    }}
                    onBlur={(e) => {
                        setAnmial(e.target.value)
                        setBreed("")
                    }}
                    >
                        <option />
                        {ANIMALS.map((animal)=> (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}

                    </select>
                        

                </label>
            <button> Submit</button>
            </form>

        </div>
    )
}

export default SearchParams ;