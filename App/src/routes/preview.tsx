import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Card from '../components/Card';
import PreviewWindow from '../components/PreviewWindow';
import Setting from '../components/Setting';

export const Route = createFileRoute('/preview')({
    component: RouteComponent,
});

function RouteComponent() {
    const [text, setText] = useState('Hello World');
    const [color, setColor] = useState('#ffffff');
    const [backgroundColor, setBackgroundColor] = useState('#000000');
    const [borderColor, setBorderColor] = useState('#ffffff');
    const [borderStyle, setBorderStyle] = useState('solid');
    const [font, setFont] = useState('Arial');
    const [fontSize, setFontSize] = useState(18);
    const [padding, setPadding] = useState(20);
    const [backgroundShape, setBackgroundShape] = useState('rounded');

    const [isGlowing, setIsGlowing] = useState(true);
    const [glowColor, setGlowColor] = useState('#00ffcc');
    const [glowSize, setGlowSize] = useState(10);
    const [glowSpread, setGlowSpread] = useState(5);
    const [glowPosition, setGlowPosition] = useState('');
    const [glowBlur, setGlowBlur] = useState(20);
    const [glowOpacity, setGlowOpacity] = useState(0.8);

    const [isTextShadow, setIsTextShadow] = useState(true);
    const [textShadowOffsetX, setTextShadowOffsetX] = useState(0);
    const [textShadowOffsetY, setTextShadowOffsetY] = useState(0);
    const [textShadowBlur, setTextShadowBlur] = useState(20);
    const [textShadowColor, setTextShadowColor] = useState('#000000');

    const previewProps = {
        text,
        color,
        backgroundColor,
        backgroundShape,
        borderStyle,
        borderColor,
        isGlowing,
        glowColor,
        glowSize,
        glowSpread,
        glowPosition,
        glowBlur,
        glowOpacity,
        isTextShadow,
        textShadowOffsetX,
        textShadowOffsetY,
        textShadowBlur,
        textShadowColor,
        font,
        fontSize,
        padding,
    };

    return (
        <section className="preview-container">
            <Card>
                <Setting label="Text">
                    <textarea value={text} onChange={(e) => setText(e.target.value)} />
                </Setting>

                <Setting label="Text Color">
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                </Setting>

                <Setting label="Background Color">
                    <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
                </Setting>

                <Setting label="Border Color">
                    <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} />
                </Setting>

                <Setting label="Border Style">
                    <select value={borderStyle} onChange={(e) => setBorderStyle(e.target.value)}>
                        <option value="solid">Solid</option>
                        <option value="dashed">Dashed</option>
                        <option value="dotted">Dotted</option>
                        <option value="double">Double</option>
                    </select>
                </Setting>

                <Setting label="Font">
                    <input type="text" value={font} onChange={(e) => setFont(e.target.value)} />
                </Setting>

                <Setting label="Font Size">
                    <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
                </Setting>

                <Setting label="Padding">
                    <input type="number" value={padding} onChange={(e) => setPadding(Number(e.target.value))} />
                </Setting>

                <Setting label="Shape">
                    <select value={backgroundShape} onChange={(e) => setBackgroundShape(e.target.value)}>
                        <option value="square">Square</option>
                        <option value="rounded">Rounded</option>
                        <option value="circle">Circle</option>
                    </select>
                </Setting>

                <Setting label="Glow On/Off">
                    <input
                        type="checkbox"
                        checked={isGlowing}
                        onChange={(e) => setIsGlowing(e.target.checked)}
                    />
                </Setting>

                {isGlowing && (
                    <>
                        <Setting label="Glow Color">
                            <input type="color" value={glowColor} onChange={(e) => setGlowColor(e.target.value)} />
                        </Setting>

                        <Setting label="Glow Size">
                            <input type="number" value={glowSize} onChange={(e) => setGlowSize(Number(e.target.value))} />
                        </Setting>

                        <Setting label="Glow Spread">
                            <input type="number" value={glowSpread} onChange={(e) => setGlowSpread(Number(e.target.value))} />
                        </Setting>

                        <Setting label="Glow Position">
                            <select value={glowPosition} onChange={(e) => setGlowPosition(e.target.value)}>
                                <option value="">Outer</option>
                                <option value="inset">Inset</option>
                            </select>
                        </Setting>

                        <Setting label="Glow Blur">
                            <input type="number" value={glowBlur} onChange={(e) => setGlowBlur(Number(e.target.value))} />
                        </Setting>

                        <Setting label="Glow Opacity">
                            <input type="number" step="0.1" min="0" max="1" value={glowOpacity} onChange={(e) => setGlowOpacity(Number(e.target.value))} />
                        </Setting>
                    </>
                )}

                <Setting label="Text Shadow On/Off">
                    <input
                        type="checkbox"
                        checked={isTextShadow}
                        onChange={(e) => setIsTextShadow(e.target.checked)}
                    />
                </Setting>

                {isTextShadow && (
                    <>
                        <Setting label="Text Shadow Offset X">
                            <input type="number" value={textShadowOffsetX} onChange={(e) => setTextShadowOffsetX(Number(e.target.value))} />
                        </Setting>

                        <Setting label="Text Shadow Offset Y">
                            <input type="number" value={textShadowOffsetY} onChange={(e) => setTextShadowOffsetY(Number(e.target.value))} />
                        </Setting>

                        <Setting label="Text Shadow Blur">
                            <input type="number" value={textShadowBlur} onChange={(e) => setTextShadowBlur(Number(e.target.value))} />
                        </Setting>
                        
                        <Setting label="Text Shadow Color">
                            <input type="color" value={textShadowColor} onChange={(e) => setTextShadowColor(e.target.value)} />
                        </Setting>

                    </>
                )}
            </Card>

            <PreviewWindow {...previewProps} />
        </section>
    );
}
