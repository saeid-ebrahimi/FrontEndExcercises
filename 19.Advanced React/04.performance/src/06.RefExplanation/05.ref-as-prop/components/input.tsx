import React from 'react'

export default function TextInput({ name, ref, onChange }: { name: string, ref: React.Ref<HTMLInputElement>, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <input type="text" name={name} ref={ref} onChange={onChange} />
    )
}
