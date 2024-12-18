import { useState } from 'react'
import languages from '../data/languages'

function Button() {
    const lang = [...languages];
    const [activelang, setActivelang] = useState(lang[0]);
    return (
        <div className="mx-4">
            <ul className="d-flex unstyle">
                {lang.map((lang) => (
                    <li key={lang.id} onClick={() => setActivelang(lang)} className='btn btn-primary mx-3'>{lang.title}</li>
                ))}
            </ul>
            <div className="box rounded mt-4">
                <h3>{activelang.title}</h3>
                <p>{activelang.description}</p>
            </div>
        </div>
    )
}

export default Button;