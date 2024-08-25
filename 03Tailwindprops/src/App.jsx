import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto"
                     src="https://images.pexels.com/photos/26690031/pexels-photo-26690031/free-photo-of-back-view-of-atlantic-puffin-on-rock.jpeg"
                     alt="" width="384" height="512"/>
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            Sarah Dayan
                        </div>
                        <div>
                            Staff Engineer, Algolia
                        </div>
                    </figcaption>
                </div>
            </figure>
            < Card username='Rimi' btnText='Click Me'/>
            < Card username='Deba'/>
        </>
    )
}

export default App
