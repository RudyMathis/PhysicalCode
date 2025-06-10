type SettingProps = {
    label: string;
    children: React.ReactNode;
};

export default function Setting({ label, children }: SettingProps) {
    return (
        <div className="setting">
            <label className="setting-label">{label}</label>
            {children}
        </div>
    );
}
