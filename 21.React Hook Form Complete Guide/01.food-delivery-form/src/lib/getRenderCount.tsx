export function getRenderCount(place: string) {
    let count = 0
    return () => {
        count++;
        return <div>Render count in {place}: {count / 2}</div>
    }
}
