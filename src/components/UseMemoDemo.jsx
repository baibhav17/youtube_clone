import React, { useMemo, useState } from 'react';
import { nthPrime } from '../utils/helper';

const UseMemoDemo = () => {
    const [inputValue, setInputValue] = useState(0)
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const primeNumber = useMemo(() => nthPrime(inputValue),[inputValue])
    console.log('isDarkTheme',isDarkTheme)
    return ( 
        <div className={`border border-black w-3/12 mx-4 ${isDarkTheme ? 'bg-gray-700 text-yellow-300' : ''}`}>
            <div>
                <button onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
            </div>
            <input type='number' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <span>nth prime number={primeNumber}</span>

            <section>
                Here when we go till 7th position like(1234567th position),
                the screen freezes and when we click on the toggle button without useMemo as it re-renders all the states again.
                <section>
                    But now with useMemo it doesn't render this again and caches the value.
                </section>
            </section>
        </div>
     );
}
 
export default UseMemoDemo;