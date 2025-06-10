import { createFileRoute } from '@tanstack/react-router'
import { useState, type SetStateAction } from 'react'
import Card from '../components/card';

export const Route = createFileRoute('/preview')({
    component: RouteComponent,
})

function RouteComponent() {
    const [text, setText] = useState('');
    const [color, setColor] = useState('');

    return <section className='preview-container'>
            <Card>
                <div className='settings'>
                    <label>Preview Code</label>
                    <textarea onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div className='settings'>
                    <label>Color</label>
                    <input type="color" onChange={(e) => setColor(e.target.value)} />
                </div>
            </Card>
            <Card>
                <div style={{ color: color }}>{text}</div>
            </Card>
        </section>
}
