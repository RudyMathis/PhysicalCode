export type PreviewWindowProps = {
    color: string;
    text: string;
    backgroundColor: string;
    backgroundShape: string;
    borderStyle: string;
    borderColor: string;
    isGlowing: boolean;
    glowColor: string;
    glowSize: number;
    glowSpread: number;
    glowPosition: string;
    glowBlur: number;
    glowOpacity: number;
    isTextShadow: boolean;
    textShadowOffsetX: number;
    textShadowOffsetY: number;
    textShadowBlur: number;
    textShadowColor: string;
    font: string;
    fontSize: number;
    padding: number;
};

export default function PreviewWindow(props: PreviewWindowProps) {
    const {
        color,
        text,
        backgroundColor,
        backgroundShape,
        borderStyle,
        borderColor,
        isGlowing,
        glowColor,
        glowSize,
        glowSpread,
        glowPosition,
        glowOpacity,
        isTextShadow,
        textShadowOffsetX,
        textShadowOffsetY,
        textShadowBlur,
        textShadowColor,
        font,
        fontSize,
        padding,
    } = props;

    const borderRadius =
        backgroundShape === 'circle' ? '50%' :
        backgroundShape === 'rounded' ? '16px' :
        '0px';

    const boxShadow = isGlowing
        ? `${glowPosition === 'inset' ? 'inset ' : ''}0 0 ${glowSize}px ${glowSpread}px rgba(${hexToRgb(glowColor)}, ${glowOpacity})`
        : 'none';

const textShadow = isTextShadow
    ? `${textShadowOffsetX}px ${textShadowOffsetY}px ${textShadowBlur}px ${hexToRgba(textShadowColor)}`
    : 'none';


    return (
        <div
            className="preview-window"
            style={{
                color,
                backgroundColor,
                border: `2px ${borderStyle} ${borderColor}`,
                borderRadius,
                boxShadow,
                textShadow,
                fontFamily: font,
                fontSize: `${fontSize}px`,
                padding: `${padding}px`,
                width: 'fit-content',
                maxWidth: '100%',
                margin: 'auto',
                textAlign: 'center',
                transition: 'all 0.3s ease-in-out',
            }}
        >
            {text}
        </div>
    );
}

// Helper to convert HEX color to RGB
function hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : '255, 255, 255';
}

function hexToRgba(hex: string, alpha = 1): string {
    const rgb = hexToRgb(hex);
    return `rgba(${rgb}, ${alpha})`;
}

