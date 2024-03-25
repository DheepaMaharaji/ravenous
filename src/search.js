import React from 'react';

function SearchFor(){
    return (
        <div>
        <form>
            <input type='text' id='userSearch'></input>
            <input type='text' id='location'></input>
            <button type='submit'>submit</button>
        </form>
        </div>
    );
}
export {SearchFor};