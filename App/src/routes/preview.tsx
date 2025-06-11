import { useNavigate, useSearch } from '@tanstack/react-router';
import { z } from 'zod';
import { createFileRoute } from '@tanstack/react-router';
import { previewSearchSchema } from '../schemas/searchSchema';
import Card from '../components/Card';
import PreviewWindow from '../components/PreviewWindow';
import Setting from '../components/Setting';

// Infer type from your Zod schema
type PreviewSearch = z.infer<typeof previewSearchSchema>;

export const Route = createFileRoute('/preview')({
    validateSearch: (search) => previewSearchSchema.parse(search),
    component: RouteComponent,
});

function RouteComponent() {
    const search = useSearch({ from: '/preview' }) as PreviewSearch;
    const navigate = useNavigate();

     // Helper to update one key in the search params
    const update = <K extends keyof PreviewSearch>(key: K, value: PreviewSearch[K]) => {
        const nextSearch = { ...search, [key]: value };
        const validated = previewSearchSchema.parse(nextSearch);

        navigate({
            search: validated,
            replace: true,
        });
    };

    const {
        text = 'Hello World',
        color = '#ffffff',
        backgroundColor = '#000000',
        borderColor = '#ffffff',
        borderStyle = 'solid',
        font = 'Arial',
        fontSize = 18,
        padding = 20,
        backgroundShape = 'rounded',
        isGlowing = true,
        glowColor = '#00ffcc',
        glowSize = 10,
        glowSpread = 5,
        glowPosition = '',
        glowBlur = 20,
        glowOpacity = 0.8,
        isTextShadow = true,
        textShadowOffsetX = 0,
        textShadowOffsetY = 0,
        textShadowBlur = 20,
        textShadowColor = '#000000',
    } = search;

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
                    <textarea value={text} onChange={(e) => update('text', e.target.value)} />
                </Setting>

                <Setting label="Text Color">
                    <input type="color" value={color} onChange={(e) => update('color', e.target.value)} />
                </Setting>

                <Setting label="Background Color">
                    <input type="color" value={backgroundColor} onChange={(e) => update('backgroundColor', e.target.value)} />
                </Setting>

                <Setting label="Border Color">
                    <input type="color" value={borderColor} onChange={(e) => update('borderColor', e.target.value)} />
                </Setting>

                <Setting label="Border Style">
                    <select value={borderStyle} onChange={(e) => update('borderStyle', e.target.value)}>
                        <option value="solid">Solid</option>
                        <option value="dashed">Dashed</option>
                        <option value="dotted">Dotted</option>
                        <option value="double">Double</option>
                    </select>
                </Setting>

                <Setting label="Font">
                    <input type="text" value={font} onChange={(e) => update('font', e.target.value)} />
                </Setting>

                <Setting label="Font Size">
                    <input type="number" value={fontSize} onChange={(e) => update('fontSize', Number(e.target.value))} />
                </Setting>

                <Setting label="Padding">
                    <input type="number" value={padding} onChange={(e) => update('padding', Number(e.target.value))} />
                </Setting>

                <Setting label="Shape">
                    <select value={backgroundShape} onChange={(e) => update('backgroundShape', e.target.value)}>
                        <option value="square">Square</option>
                        <option value="rounded">Rounded</option>
                        <option value="circle">Circle</option>
                    </select>
                </Setting>

                <Setting label="Glow On/Off">
                    <input
                        type="checkbox"
                        checked={isGlowing}
                        onChange={(e) => update('isGlowing', e.target.checked)}
                    />
                </Setting>

                {isGlowing && (
                <>
                    <Setting label="Glow Color">
                        <input type="color" value={glowColor} onChange={(e) => update('glowColor', e.target.value)} />
                    </Setting>

                    <Setting label="Glow Size">
                        <input type="number" value={glowSize} onChange={(e) => update('glowSize', Number(e.target.value))} />
                    </Setting>

                    <Setting label="Glow Spread">
                        <input type="number" value={glowSpread} onChange={(e) => update('glowSpread', Number(e.target.value))} />
                    </Setting>

                    <Setting label="Glow Position">
                        <select value={glowPosition} onChange={(e) => update('glowPosition', e.target.value)}>
                            <option value="">Outer</option>
                            <option value="inset">Inset</option>
                        </select>
                    </Setting>

                    <Setting label="Glow Blur">
                        <input type="number" value={glowBlur} onChange={(e) => update('glowBlur', Number(e.target.value))} />
                    </Setting>

                    <Setting label="Glow Opacity">
                        <input
                            type="number"
                            step="0.1"
                            min="0"
                            max="1"
                            value={glowOpacity}
                            onChange={(e) => update('glowOpacity', Number(e.target.value))}
                        />
                    </Setting>
                </>
                )}

                <Setting label="Text Shadow On/Off">
                    <input
                        type="checkbox"
                        checked={isTextShadow}
                        onChange={(e) => update('isTextShadow', e.target.checked)}
                    />
                </Setting>

                {isTextShadow && (
                <>
                    <Setting label="Text Shadow Offset X">
                        <input
                            type="number"
                            value={textShadowOffsetX}
                            onChange={(e) => update('textShadowOffsetX', Number(e.target.value))}
                        />
                    </Setting>

                    <Setting label="Text Shadow Offset Y">
                        <input
                            type="number"
                            value={textShadowOffsetY}
                            onChange={(e) => update('textShadowOffsetY', Number(e.target.value))}
                        />
                    </Setting>

                    <Setting label="Text Shadow Blur">
                        <input
                            type="number"
                            value={textShadowBlur}
                            onChange={(e) => update('textShadowBlur', Number(e.target.value))}
                        />
                    </Setting>

                    <Setting label="Text Shadow Color">
                        <input
                            type="color"
                            value={textShadowColor}
                            onChange={(e) => update('textShadowColor', e.target.value)}
                        />
                    </Setting>
                </>
                )}
            </Card>

            <PreviewWindow {...previewProps} />
        </section>
    );
}