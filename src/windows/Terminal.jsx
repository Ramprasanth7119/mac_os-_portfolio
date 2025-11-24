import WindowWrapper from '#components/doc/WindowWrapper'
import WindowControlls from '#components/WindowControlls';
import { techStack } from '#constants';
import { Check, Flag } from 'lucide-react';
import React from 'react'

const Terminal = () => {
  return (
    <>
        <div id="window-header">
            <p><WindowControlls target="terminal"/></p>
            <h2>Tech Stacks</h2>
        </div>
        <div className='techstack'>
            <p>
                <span className='font-bold'>@Ram %</span>
                show tech stack
            </p>

            <div className='label'>
                <p className='w-32'>Category</p>
                <p>Technologies</p>
            </div>

            <ul className='content'>
                {techStack.map(({category, items})=>(
                    <li id={category} className='flex items-center'>
                        <Check className='check' size={20} />
                        <h3>{category}</h3>
                        <ul>
                            {items.map((item, i) =>(
                                <li key={i}>
                                    {item}
                                    {i < items.length - 1 ? "," : ""}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <div className='footnote'>
                <p>
                    <Check size={20}/> 5 of 5 stacks loaded successfully (100%)
                </p>
                <p>
                    <Flag size={15} fill='black'/>
                    Render time: 6ms
                </p>
            </div>
        </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;