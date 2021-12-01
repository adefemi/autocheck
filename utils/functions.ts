export function formatCurrency(value: number): string {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

export function formatNumber(value: number): string {
    return value.toLocaleString('en-US')
}

export function slugify(text: string): string {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}