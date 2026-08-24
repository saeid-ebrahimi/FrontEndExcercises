function ObjectViewer({
    value,
}: {
    value: unknown;
}) {
    if (typeof value !== "object" || value === null) {
        return <span>{String(value)}</span>;
    }

    return (
        <div>
            {Object.entries(value).map(([key, child]) => (
                <div key={key}>
                    <strong>{key}:</strong>

                    <ObjectViewer value={child} />
                </div>
            ))}
        </div>
    );
}